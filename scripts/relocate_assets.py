import os
import re
from pathlib import Path

from mkdocs.plugins import event_priority


ASSET_PATH = re.compile(r"(?<![A-Za-z0-9_-])assets/")
TEXT_FILE_SUFFIXES = {".css", ".html", ".js", ".xml"}


@event_priority(-100)
def on_post_build(config, **kwargs):
    site_dir = Path(config["site_dir"])
    assets_dir = site_dir / "assets"
    relocated_assets_dir = site_dir / "_assets"

    if not assets_dir.is_dir():
        raise FileNotFoundError("MkDocs did not generate the expected assets directory.")

    for asset in assets_dir.rglob("*"):
        if asset.is_file():
            destination = relocated_assets_dir / asset.relative_to(assets_dir)
            destination.parent.mkdir(parents=True, exist_ok=True)
            os.replace(str(asset), str(destination))

    for directory in sorted(
        (path for path in assets_dir.rglob("*") if path.is_dir()),
        key=lambda path: len(path.parts),
        reverse=True,
    ):
        directory.rmdir()
    assets_dir.rmdir()

    for output_file in site_dir.rglob("*"):
        if output_file.is_file() and output_file.suffix.lower() in TEXT_FILE_SUFFIXES:
            content = output_file.read_text(encoding="utf-8")
            updated_content = ASSET_PATH.sub("_assets/", content)
            if updated_content != content:
                output_file.write_text(updated_content, encoding="utf-8")
