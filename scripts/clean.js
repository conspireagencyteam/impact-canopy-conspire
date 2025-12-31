const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '../assets');

// Get all JS files from src/scripts
const srcScripts = path.resolve(__dirname, '../src/scripts');
const scriptFiles = fs.readdirSync(srcScripts)
  .filter(file => file.endsWith('.js'))
  .map(file => path.join(assetsDir, file));

// Get all CSS files from src/styles
const srcStyles = path.resolve(__dirname, '../src/styles');
const styleFiles = fs.readdirSync(srcStyles)
  .filter(file => file.endsWith('.scss'))
  .map(file => path.join(assetsDir, file.replace('.scss', '.css')));

// Get all SVG files from src/icons
const srcIcons = path.resolve(__dirname, '../src/icons');
const svgFiles = fs.readdirSync(srcIcons)
  .filter(file => file.endsWith('.svg'))
  .map(file => path.join(assetsDir, file));

// Combine all files to delete
const filesToDelete = [...scriptFiles, ...styleFiles, ...svgFiles];

// Delete files
let deletedCount = 0;
filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    deletedCount++;
    console.log(`Deleted: ${path.basename(file)}`);
  }
});

console.log(`\nCleaned ${deletedCount} webpack-generated files from assets/`);
