const exampleArr = [2, 5, 7, 1, 23, 4];

let newArrangement = [];
let swamp = 0;
let flag;
for (let i = 0; i < exampleArr.length - 1; i++) {
  for (let j = 0; j < exampleArr.length - 1 - i; j++) {
    if (exampleArr[j] > exampleArr[j + 1]) {
      swamp = exampleArr[j];
      exampleArr[j] = exampleArr[j + 1];
      exampleArr[j + 1] = swamp;
      flag = true;
    }
  }
  if (!flag) {
    break;
  }
}
//restudy
//bubble sort algo
console.log(exampleArr);
