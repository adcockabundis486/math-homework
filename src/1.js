const { random } = require('mathjs');
let num1 = random(1, 10);
let num2 = random(1, 10);
let op = ['+', '-', '*', '/'].random();
let answer = eval(`${num1} ${op} ${num2}`);
console.log(`What is ${num1} ${op} ${num2}?`);
