function checkPrime(n) {
  let flag = false;

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = true;
        break;
      }
    }
  }

  if (flag) {
    console.log("this is not a prime number");
  } else {
    console.log("this is a prime number");
  }
}
checkPrime(12);
