 const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const mathProblems = [
    { problem: '2 + 2', solution: 4 },
    { problem: '5 - 3', solution: 2 },
    { problem: '10 x 2', solution: 20 },
    { problem: '8 / 2', solution: 4 },
    { problem: '6 x 9', solution: 54 }
  ];
  res.json(mathProblems);
});
app.listen(3000, () => console.log('Listening on port 3000'));
