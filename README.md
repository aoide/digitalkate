# Digital Kate (MKDocs Edition)

## Description

A MKdocs version of the digitalkate.net portfolio

## Installing

1. For the local computer (admin powershell):
    1. Install Python
    1. Install Python Extensions: `py -m pip install "mkdocs>=1.4" mkdocs-material codespell mkdocs-glightbox`
    1. Install Chocolately: [Installing Chocolatey](https://chocolatey.org/install)
    1. Install Vale: `choco install vale`
1. In the project root:
    1. Setup Vale: `vale sync`

## Running

In the terminal:

- **CodeSpell**
    - `codespell`
- **MkDocs**
    - `mkdocs build`
    - `mkdocs serve`

## Related Resources

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [MkDocs](https://www.mkdocs.org/getting-started/)
- MKDocs Plugins
    - [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) (theme)
    - [glightbox](https://github.com/blueswen/mkdocs-glightbox)
- [Vale](https://vale.sh/) (writing checks)
