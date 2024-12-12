function f(a) {
  return function (b) {
    return `${a}${b}`;
  };
}

console.log(f(5)(6));

/// another example of currying in js

// question 1 - sum(2)(6)(1)
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(3));
