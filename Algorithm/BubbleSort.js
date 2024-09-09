function bubbleSort(arr, range) {
  let isFlag;
  let swapped;
  for (let i = 0; i < range - 1; i++) {
    isFlag = false;

    for (let j = 0; j < range - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swapped;
        isFlag = true;
      }
      console.log(arr);
    }

    if (isFlag == false) {
      break;
    }
  }
}

let arr = [7, 4, 23, 9, 20, 18];
let range = arr.length;
bubbleSort(arr, range);
