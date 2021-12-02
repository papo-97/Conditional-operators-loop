let arr = [1, 4, 5, 6, 7, -1];
let len = arr.length;

for (let j = 0; j < len; j++) {
  let temp = arr[j];
  if (arr[j] > arr[j + 1]) {
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}

console.log(arr);
