const sumAll = function(a, b) {

    let sum = 0;

    // ensures a is the smaller variable
    if (a > b) {
        [a, b]  = [b, a];
    }

    // throws error if arg is negative or not a number
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        return 'ERROR'
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
