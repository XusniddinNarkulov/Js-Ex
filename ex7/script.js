const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const usluga = [];
const total = [];
function calcUsluga() {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      usluga.push(bills[i] * 0.15);
    } else {
      usluga.push(bills[i] * 0.2);
    }
  }
  return usluga;
}
function calcTotal() {
  for (let i = 0; i < usluga.length; i++) {
    total.push(bills[i] - usluga[i]);
  }
  return total;
}
function calcAverage() {
  let s = 0;
  for (let i = 0; i < total.length; i++) {
    s += total[i] / total.length;
  }
  return `average total: ${s}`;
}
console.log(calcUsluga());
console.log(calcTotal());
console.log(calcAverage());
