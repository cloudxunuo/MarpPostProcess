const { execSync } = require('child_process');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');

// Check if a Markdown file path was provided
if (process.argv.length < 3) {
    console.error('Usage: node build.js <path/to/markdown-file>');
    process.exit(1);
}

// Extract the Markdown file path from the command line arguments
const markdownFilePath = process.argv[2];

// Define the input Markdown path and output HTML path based on the provided path
const inputMarkdownPath = path.resolve(process.cwd(), markdownFilePath);
const outputFileBaseName = path.basename(markdownFilePath, '.md');
const outputHtmlDir = path.dirname(inputMarkdownPath);
const outputHtmlPath = path.join(outputHtmlDir, `${outputFileBaseName}.html`);

const cmd = `npx @marp-team/marp-cli --html "${inputMarkdownPath}" -o "${outputHtmlPath}"`;
console.log(`Executing: ${cmd}`);
try {
    execSync(cmd, { stdio: 'inherit' }); // Display command output directly
    console.log('Marp CLI execution succeeded.');

    // Read the generated HTML
    fs.readFile(outputHtmlPath, 'utf8', (err, html) => {
        if (err) {
            console.error(`Read file error: ${err}`);
            return;
        }

        // Use JSDOM to manipulate HTML
        const dom = new JSDOM(html);
        const { document } = dom.window;

        // Insert modal HTML at the end of the body
        const modalHtml = `
<div id="imageModal" class="modal" style="display: none;">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>
`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Insert modal styles in the head
        const styles = `
<style>
.modal {position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center;}
.modal-content {max-width: 80%; max-height: 80%; margin: auto; display: block;}
.close {position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;}
</style>
`;
        document.head.insertAdjacentHTML('beforeend', styles);

        // Inject JavaScript at the end of the body for modal functionality
        const script = `
<script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.onclick = () => {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modalImg.src = img.src;
      modal.style.display = "flex";
    };
  });

  const closeModal = () => {
    document.getElementById('imageModal').style.display = "none";
  };

  document.querySelector('.modal .close').onclick = closeModal;
  document.getElementById('imageModal').onclick = closeModal;

  // Prevent modal image clicks from closing the modal
  document.querySelector('.modal-content').onclick = (event) => {
    event.stopPropagation();
  };
});
</script>
`;
        document.body.insertAdjacentHTML('beforeend', script);

        // Write back the modified HTML
        fs.writeFile(outputHtmlPath, dom.serialize(), 'utf8', err => {
            if (err) console.error(`Write file error: ${err}`);
        });

    });
} catch (error) {
    console.error('Failed to execute Marp CLI:', error);
}