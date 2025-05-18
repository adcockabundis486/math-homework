// Node.js example of how to use async/await
const fs = require('fs');
const path = require('path');

async function readFileAndWrite(filePath) {
  try {
    const fileContent = await fs.readFile(path.join(__dirname, filePath), 'utf8');
    console.log(`Read file content: ${fileContent}`);
    // Do something with the file content here
  } catch (err) {
    console.error('Error reading or writing file:', err);
  }
}

readFileAndWrite('/path/to/your/file.txt');
