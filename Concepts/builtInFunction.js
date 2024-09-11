const givenArray = [2, 46, 9, 7, 35, 5, 67];
// map function
const dividedBy2 = givenArray.map(divided);
function divided(n) {
  return n / 2;
}
console.log(dividedBy2);

//filter

const returnArray = givenArray.filter(checkNum);

function checkNum(n) {
  return n > 10;
}
console.log(returnArray);
