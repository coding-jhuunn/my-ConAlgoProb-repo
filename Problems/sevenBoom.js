function sevenBoom(n) {
  if (n.length < 0) {
    return "empty";
  }

  for (let index = 0; index < n.length; index++) {
    if (n[index] === 7) {
      return "Boom!";
    }
  }
  return "there is no 7";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6]));
