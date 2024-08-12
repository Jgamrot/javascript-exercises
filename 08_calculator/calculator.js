const add = function(...numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
};

const subtract = function(...numbers) {
  if (numbers.length === 2) {
    // Direct subtraction for two numbers
    return numbers[0] - numbers[1];
  } else {
    // Subtract all subsequent numbers from the first one
    return numbers.reduce((difference, current) => difference - current);
  }
};


const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((product, current) => product * current, 1);

};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};


const factorial = function(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1; // Base case: 0! = 1! = 1
  return n * factorial(n - 1);
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
