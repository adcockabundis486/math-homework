function getRandomInt(min, max) {
    min = Math.ceil(Math.min(max, 10));
    return Math.floor((Math.random() * (max - min + 1))) + min;
}
