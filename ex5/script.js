// 1-topshiriq
let calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

let avgDelfin = calcAverage(44, 23, 71);
let avgKoala = calcAverage(85, 54, 49);
console.log(avgDelfin);
console.log(avgKoala);

let checkWinner = function (avgDolhins, avgKoalas) {
  return avgKoalas / avgDolhins;
};
if (checkWinner(46, 62.7) >= 2) {
  console.log("Koalalar galaba qozonadi");
} else {
  console.log("Hech kim galaba qozonmadi");
}

// 2-topshiriq
function calculator(a, b) {}
let a = Number(prompt("1-raqamni kiriting:"));
let b = Number(prompt("2-raqamni kiriting"));
let amal = prompt("+,-,/,*");