const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const problems = [
    { question: 'What is the value of x in the equation 2x + 5 = 11?', answer: 3 },
    { question: 'What is the value of y in the equation y = mx + b?', answer: null },
    { question: 'What is the value of z in the equation z = x^2 + y^2?', answer: 0 }
  ];
  res.send(problems);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
