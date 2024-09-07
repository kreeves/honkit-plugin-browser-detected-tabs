const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

module.exports = {
    hooks: {
        "page": function(page) {
            // Path to the osDetect.js file
            const scriptPath = path.join(__dirname, 'osDetect.js');
            const scriptContent = fs.readFileSync(scriptPath, 'utf8');

            // Inject the script into the page
            page.content += `<script>${scriptContent}</script>`;
            return page;
        }
    },
    blocks: {
        osContent: {
            process: function (block) {
                // console.log(block);
                const targetOS = block.args[0];
                const parsedContent = marked(block.body);
                return `<div data-os-content="${targetOS}">${parsedContent}</div>`;
            }
        }
    }
}