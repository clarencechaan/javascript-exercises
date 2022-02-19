const removeFromArray = function(array) {

    let args = Array.prototype.slice.call(arguments).slice(1);
    let resultArray = []

    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;

};

// Do not edit below this line
module.exports = removeFromArray;
