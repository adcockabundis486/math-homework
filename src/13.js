const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

function execute(cmd) {
  let result;
  try {
    result = child_process.execSync(cmd).toString();
  } catch (error) {
    console.log(error);
  }
  return result;
}

const homeworkDir = path.join(__dirname, 'homework');
fs.readdirSync(homeworkDir).forEach((file) => {
  const filePath = path.join(homeworkDir, file);
  if (fs.lstatSync(filePath).isDirectory()) {
    execute(`cd ${filePath}`);
  } else {
    execute(`node ${filePath}`);
  }
});
