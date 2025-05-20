function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    while (c < n) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fibonacci(10));
