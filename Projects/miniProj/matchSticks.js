function matchHouses(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return "non-negative integer";
  }
  if (n === 1) {
    return 6;
  }
  let result = 6 * n;
  for (let index = 1; index < n; index++) {
    result--;
  }
  return result;
}

console.log(matchHouses(87));
