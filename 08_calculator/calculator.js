const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((accumulator, initialValue) => {
    return accumulator + initialValue;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, initialValue) => {
    return accumulator * initialValue;
  });
};

const power = function(base, exp) {
 let product = 1;

 for (let i=0; i<exp; i++) {
    product *= base;
 }

 return product
};

const factorial = function(num) {
  let product = 1;

  for (let i=1; i<=num; i++) {
    product *= i;
  }

  return product;
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
