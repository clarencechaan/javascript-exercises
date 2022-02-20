const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    const fibonacciSequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
    }
    return fibonacciSequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
