const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(sumArray) {
  const initialValue = 0;
  return sumArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
};

const multiply = function(multiplyArray) {
  const initialValue = 1;
  return multiplyArray.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
  return factorial(n);
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
