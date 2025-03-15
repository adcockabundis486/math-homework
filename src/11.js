// Get two numbers from user input
const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");

// Check if the numbers are valid
if (num1 && num2) {
  // Perform calculation and display result
  const result = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${result}.`);
} else {
  console.error("Invalid input");
}
