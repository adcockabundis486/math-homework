function calculateGCD(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

console.log(calculateGCD(12, 8)); // 4
