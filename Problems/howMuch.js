//Create a function which returns the number of true values there are in an array.

const n = [true, false, false, true, false];
function countTrue(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      count++;
    }
  }
  return count;
}

console.log(countTrue(n));
