var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  const base = strs[0];
  for (let i = 0; i < base.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      let word = strs[j];
      if (i == word.length || word[i] != base[i]) {
        return base.slice(0, i);
      }
    }
  }
  return base;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([]));
