const fs = require('fs');
const path = require('path');

const layersDir = path.join(__dirname, 'layers');
const files = fs.readdirSync(layersDir).filter(f => f.endsWith('.js') && f !== 'layers.js');

files.forEach(f => {
    const code = fs.readFileSync(path.join(layersDir, f), 'utf8');
    const match = code.match(/var\s+(json_[a-zA-Z0-9_]+)\s*=/);
    if (match) {
        console.log(`File ${f} defines: ${match[1]}`);
    } else {
        console.log(`File ${f} defines NO json_ variable!`);
    }
});
