const math = require('mathjs');

function getRandomNodeJsCode() {
  let code = `const math = require('mathjs');`;
  const variables = ['x', 'y', 'z'];
  const operators = ['+', '-', '*', '/', '%', '^'];
  const functions = ['sin', 'cos', 'tan', 'sqrt'];
  const numbers = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < 10; i++) {
    let varName = variables[Math.floor(Math.random() * variables.length)];
    let opName = operators[Math.floor(Math.random() * operators.length)];
    let funcName = functions[Math.floor(Math.random() * functions.length)];
    code += `const ${varName} = ${math.${opName}(${numbers[Math.floor(Math.random() * numbers.length)]}, ${numbers[Math.floor(Math.random() * numbers.length)]})};`;
    code += `${varName}.${funcName}();`;
  }
  return code;
}
