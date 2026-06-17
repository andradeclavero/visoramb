const fs = require('fs');
const path = require('path');

const layersPath = path.join(__dirname, 'layers', 'layers.js');
const layersBackupPath = path.join(__dirname, 'layers', 'layers.js.bak');

let content = fs.readFileSync(layersPath, 'utf8');

// Create backup
fs.writeFileSync(layersBackupPath, content);

const lines = content.split('\n');
const fixedLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    if (line.includes('[...]')) {
        // Type 1: readFeatures
        if (line.includes('.readFeatures(json_')) {
            const match = line.match(/var features_([a-zA-Z0-9_]+) =/);
            if (match) {
                const layerName = match[1];
                line = line.replace(/json_.*\[\.\.\.\]/, `json_${layerName}, `);
            }
        }
        // Type 2: title
        else if (line.includes('title: \'')) {
            line = line.replace(/\[\.\.\.\]/, '');
            // check if there's a missing quote
            if (!line.endsWith("',") && !line.endsWith("'")) {
                line += "',";
            }
            // fix potential unclosed tags if needed, but browser usually handles unclosed HTML in strings
        }
        // Type 3: layer group layers array
        else if (line.includes('layers: [')) {
            line = line.replace(/,[a-zA-Z0-9_]*\[\.\.\.\]/, ']');
        }
        // Type 4: setVisible chain
        else if (line.includes('.setVisible(')) {
            line = line.replace(/lyr_[a-zA-Z0-9_]*\[\.\.\.\]/, '');
        }
        // Type 5: .set('fieldAliases', or fieldImages or fieldLabels
        else if (line.includes(".set('fieldAliases'") || line.includes(".set('fieldImages'") || line.includes(".set('fieldLabels'")) {
            // It might end with ` 'field': '[...]` or ` 'field': 'Te[...]`
            // Let's just find the last comma and truncate there, then add `});`
            const lastComma = line.lastIndexOf(',');
            if (lastComma > 0) {
                line = line.substring(0, lastComma) + '});';
            } else {
                // If no comma, just close it
                line = line.replace(/\[\.\.\.\]/, "});");
            }
        } else {
            // Generic fallback: just remove [...] and hope for the best
            line = line.replace(/\[\.\.\.\]/, '');
        }
    }
    
    // There is one edge case: what if a line doesn't have [...] but it's part of a broken object?
    // The previous regexes handle most.
    
    fixedLines.push(line);
}

fs.writeFileSync(layersPath, fixedLines.join('\n'));
console.log('Fixed layers.js');
