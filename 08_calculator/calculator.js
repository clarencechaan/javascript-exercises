const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	for (let num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
