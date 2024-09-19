let sum = 0;

for (let range = 0, b = 0, c = 0; range <= 99; range++, b++, c++) {
  if (b <= 10) {
    sum += c;
  }
  if (b === 20) {
    b = 0;
  }
  console.log(sum, b, c);
}
