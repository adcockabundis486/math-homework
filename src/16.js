const express = require('express');
const router = express.Router();

// GET route for retrieving math homework
router.get('/math-homework', (req, res) => {
  // generate a random math problem and solution
  const problem = `What is the value of x in the equation ${x} + ${5} = ${10}`;
  const solution = `${x} = ${5}`;

  // return the generated math homework to the client
  res.json({ problem, solution });
});

module.exports = router;
