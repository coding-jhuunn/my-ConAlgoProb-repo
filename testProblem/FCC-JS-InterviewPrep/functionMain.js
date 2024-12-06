// what is fucntion declarations?
function square(num) {
  return num * num;
}
// ------------------------------------------------
// what is fucntion expression?
const returnNum = function (num) {
  return num;
};
// ------------------------------------------------
// what are first class functions?
function displaySquare(fn) {
  console.log("square is" + fn(5));
}

console.log(displaySquare(square));
