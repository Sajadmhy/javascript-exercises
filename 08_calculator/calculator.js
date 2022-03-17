const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
  return (a-b);
};

const sum = function(a) {
	summation = a.reduce((partialSum, b) => partialSum + b, 0);
  return summation;
};

const multiply = function(a) {
  var sum=1;
  for (var i=0; i<a.length; i++) {
      sum = sum * a[i];
  } 
  return sum;
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if(n == 0 || n == 1){
    return 1;
  }else{
    return n * factorial(n-1);
  };
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
