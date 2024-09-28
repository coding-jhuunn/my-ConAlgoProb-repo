const firstarr = [2, 5, 3, 6, 2, 4, 2];

const secondarray = [2, 51, 3, 23, 7, 8, 3, 4, 6];

function combineTwoArr(first, second) {
  let finalArray = [];

  for (let index = 0; index < first.length; index++) {
    if (!finalArray.includes(first[index])) {
      finalArray.push(first[index]);
    }
  }
  for (let index = 0; index < second.length; index++) {
    if (!finalArray.includes(second[index])) {
      finalArray.push(second[index]);
    }
  }

  return finalArray;
}

console.log(combineTwoArr(firstarr, secondarray));
