const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'math-homework', 'problems.json');
let problems = JSON.parse(fs.readFileSync(filePath));
let randomProblem = problems[Math.floor(Math.random() * problems.length)];

console.log(`${randomProblem.question} (${randomProblem.points} points)`);
