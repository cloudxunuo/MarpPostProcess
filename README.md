# This project is an extension of Marp.

- New features:
    - Clicking an image to show the original image, a feature that Marp for VS Code does not support.
    - Post process after `Marp CLI`, you can add new features based on this project.

- Official documentation site: https://marpit.marp.app/markdown

# Installation
- Install the VS Code extension `Marp for VS Code`.
- Execute `./scripts/install.bat`.


# Writing your markdown
- It's better to create a folder in `./src`, with one markdown file per folder.


# Publishing your markdown
- You can choose one of two ways:
    - Publish using the exporting command in `Marp for VS Code`.
    - Publish using the OS Marp `build.js`, which will generate an HTML slide deck file.
        - At the root directory, execute node `.\scripts\build.js .\src\path_to_your_file.md`.
        - The output file will be `.\src\path_to_your_file.html.`