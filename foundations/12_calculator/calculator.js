const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, curr) => total += curr, 0);
};

const multiply = function(array) {
  return array.reduce((total, curr) => total *= curr, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	let answer = 1;

  for (let i=1; i<=n; i++) {
    answer *= i;
  }

  return answer;
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
