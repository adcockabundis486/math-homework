function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInteger(1, 10));
