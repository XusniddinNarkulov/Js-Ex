const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const usluga = [];
const total = [];
function calcUsluga() {
  for (let i = 0; i < bills.length; i++) {
    usluga.push(bills[i] * 0.1);
  }
  return usluga;
}
function calcTotal() {
  for (let i = 0; i < usluga.length; i++) {
    total.push(bills[i] - usluga[i]);
  }
  return total;
}
function calcAverage() {}
console.log(calcUsluga());
console.log(calcTotal());
