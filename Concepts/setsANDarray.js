//sets
// can only contain unique values. it won’t result in duplicates.

//create set
// const lettersA = new Set(["a", "b", "c"]);

// interate to a set
// for (let value of lettersA) {
//   console.log(value);
// }

function newLetter(sA, sB) {
  const newUnion = new Set(sA);

  for (const num of sB) {
    newUnion.add(num);
  }
  return newUnion;
}
const lettersA = new Set(["a", "b", "c"]);
const lettersB = new Set(["d", "e", "f"]);
newLetter(lettersA, lettersB);
console.log(newLetter(lettersA, lettersB));
//array
