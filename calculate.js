function Calc(Number, Number1) {
  let sum = Number + Number1;
  let product = Number * Number1;
  if (product % sum === 0) {
    return product / sum;
  } else {
    return product % sum;
  }
}
