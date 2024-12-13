function largestSwap(num) {
  let swapNum = [];
  let newString = num.toString();

  for (let index = newString.length; index >= 0; index--) {
    swapNum.push(newString[index]);
  }
  if (num === Math.floor(swapNum.join(""))) {
    return true;
  }
  if (num > Math.floor(swapNum.join(""))) {
    return true;
  } else {
    return false;
  }
}

console.log(largestSwap(71));
