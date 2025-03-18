const { math } = require("mathjs");

const calculateGrade = (score) => {
  if (score < 60) return "F";
  else if (score >= 60 && score <= 69) return "D";
  else if (score >= 70 && score <= 79) return "C";
  else if (score >= 80 && score <= 89) return "B";
  else if (score >= 90 && score <= 100) return "A";
};

const score = math.randomInt(1, 100);
console.log(`Your grade is ${calculateGrade(score)}.`);
