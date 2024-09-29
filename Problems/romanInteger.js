function romanToInt(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] + s[i + 1] === "CM") {
      count += 900;
      i++;
    } else if (s[i] === "M") {
      count += 1000;
    } else if (s[i] + s[i + 1] === "CD") {
      count += 400;
      i++;
    } else if (s[i] === "D") {
      count += 500;
    } else if (s[i] + s[i + 1] === "XC") {
      count += 90;
      i++;
    } else if (s[i] === "C") {
      count += 100;
    } else if (s[i] + s[i + 1] === "XL") {
      count += 40;
      i++;
    } else if (s[i] === "L") {
      count += 50;
    } else if (s[i] + s[i + 1] === "IX") {
      count += 9;
      i++;
    } else if (s[i] === "X") {
      count += 10;
    } else if (s[i] + s[i + 1] === "IV") {
      count += 4;
      i++;
    } else if (s[i] === "V") {
      count += 5;
    } else if (s[i] === "I") {
      count += 1;
    }
  }
  return count;
}

console.log(romanToInt("IV"));
