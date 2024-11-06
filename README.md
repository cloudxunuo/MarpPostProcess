# This project is an extension of Marp.
- Open `src\example_xx`'s `html` to see examples. (down load it and open it, do not open it in github web site)
- New features:
    - Clicking an image to show the original image, a feature that Marp for VS Code does not support.
    - Publish HTML slide as a single HTML file if you don't reference any video (by default).
        - If you reference any video, you can publish HTML slide as a folder.
    - Post process after `Marp CLI`, you can add new features based on this project.

- Official documentation site: https://marpit.marp.app/markdown

# Installation
- This project is based on `Node.js`, so you need to install it.
- Install the VS Code extension `Marp for VS Code`.
- Execute `./scripts/install.bat`.


# Writing your markdown
- It's better to create a folder in `./src`, with one markdown file per folder.


# Publishing your markdown
- You can choose one of two ways:
    - Publish using the exporting command in `Marp for VS Code`.
    - Publish using the `.\scripts\build.js` in this project, which will generate an HTML slide deck file (or folder).
        - At the root directory, execute `node .\scripts\build.js .\src\path_to_your_file.md`.
        - If you reference any video, cmd will fail. You need to add `-publish-by-folder` option and retry.
        - The output file will be `.\src\path_to_your_file.html`, or the total folder if you reference any video