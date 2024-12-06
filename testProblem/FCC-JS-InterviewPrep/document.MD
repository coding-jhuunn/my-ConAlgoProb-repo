# FCC JS Interview Preparation

_what is function declarations?_

```
function square(num) {
return num * num;
}
```

_what is function expression?_

> when you store a function inside of a variable

```
const square = function (num) {
return num;
};
```

> it is all called an anonymous function
> which the function has no name and it can be assigned to variable or can be passed as a callback

_what is first class functions?_

> it can be passed into another functions can be used manipulated and return from those function

```
function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("square is" + fn(5));
}

console.log(displaySquare(square));

```
