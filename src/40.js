function getPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (limit % i === 0) {
            break;
        }
        primes.push(i);
    }
    return primes;
}

function findLargestPrimeMultiple(n) {
    const multiples = getPrimes(Math.sqrt(n));
    let largestMultiple = n;
    for (let multiple of multiples) {
        if (multiple > largestMultiple) {
            largestMultiple = multiple;
        }
    }
    return largestMultiple;
}
