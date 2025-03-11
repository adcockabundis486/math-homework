const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});
