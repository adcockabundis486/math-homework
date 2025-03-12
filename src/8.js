const mathHomework = {
  // Return a random integer between 1 and 100
  getRandomInteger: () => Math.floor(Math.random() * 100) + 1,
  
  // Return a random floating point number between 0 and 1
  getRandomFloat: () => Math.random(),
  
  // Return a random boolean value (true or false)
  getRandomBoolean: () => Math.random() > 0.5,
  
  // Return a random string of the specified length
  getRandomString: (length) => Array(length).fill('').map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join(''),
  
  // Return a random array of integers between 1 and the specified size
  getRandomArray: (size) => Array(size).fill().map((_, i) => Math.floor(Math.random() * (i + 1))),
};
