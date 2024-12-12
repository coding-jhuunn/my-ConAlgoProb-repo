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
// question 2

// evaluate("sum")(4)(2)=>6
// evaluate("multiply")(4)(2)=>8
// evaluate("substract")(4)(2)=>2
// evaluate("divide")(4)(2)=>2

function evaluate(n) {
  if (n === "sum") {
    return function (a) {
      return function (b) {
        return a + b;
      };
    };
  } else if (n === "multiply") {
    return function (a) {
      return function (b) {
        return a * b;
      };
    };
  } else if (n === "substract") {
    return function (a) {
      return function (b) {
        return a - b;
      };
    };
  } else if (n === "divide") {
    return function (a) {
      return function (b) {
        return a / b;
      };
    };
  } else return "none of the above";
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
