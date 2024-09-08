//calculate specific row or col in a 2d Array
let MathScore = [
  [4, 20, 60, 1],
  [34, 10, 52, 2],
  [23, 5, 24, 3],
  [21, 28, 43, 4],
];

function sumOfRow(givenArr, specRow) {
  if (specRow < 0 || specRow >= givenArr.length) {
    return "row index out of bounds";
  }
  let sum = 0;

  for (let index = 0; index < givenArr.length; index++) {
    sum += givenArr[specRow][index];
  }
  return sum;
}

function sumOfCol(givenArr, specCol) {
  if (givenArr.length === 0 || specCol < 0 || specCol >= givenArr[0].length) {
    return "col out of bounds";
  }
  let sum = 0;
  for (let index = 0; index < givenArr.length; index++) {
    sum += givenArr[index][specCol];
  }
  return sum;
}

// console.log(sumOfRow(MathScore, 3));
// console.log(sumOfCol(MathScore, 0));
