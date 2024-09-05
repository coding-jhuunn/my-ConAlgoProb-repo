const exampleArr = [2, 5, 7, 1, 23, 23];
// Calculate the sum of numbers within an array
function sumArray(givenArr) {
  let sum = 0;
  for (let index = 0; index < givenArr.length; index++) {
    sum += givenArr[index];
  }
  return sum;
}
console.log(sumArray(exampleArr));
