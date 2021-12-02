function Angle(angle, triangle) {
  let side = 180 - (angle + triangle);
  return side;
}

console.log(Angle(45, 90));
console.log(Angle(30, 30));
console.log(Angle(75, 25));
