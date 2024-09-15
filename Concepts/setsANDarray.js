//sets
// can only contain unique values. it won’t result in duplicates.

//create set
// const lettersA = new Set(["a", "b", "c"]);

// interate to a set
// for (let value of lettersA) {
//   console.log(value);
// }

// union
function newUnion(sA, sB) {
  const newUnion = new Set(sA);

  for (const num of sB) {
    newUnion.add(num);
  }
  return newUnion;
}
const lettersA = new Set(["a", "b", "c", "f"]);
const lettersB = new Set(["a", "d", "e", "f"]);
console.log(newUnion(lettersA, lettersB));

//intersection
// middle
const newIntersect = new Set([...lettersA].filter((i) => lettersB.has(i)));
console.log(...newIntersect);

// difference

const diffSet = new Set([lettersA].filter((x) => ![lettersB].includes(x)));

console.log(diffSet);
//array
