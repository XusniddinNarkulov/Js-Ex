// 1-topshiriq
// let calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// let avgDelfin = calcAverage(44, 23, 71);
// let avgKoala = calcAverage(85, 54, 49);
// console.log(avgDelfin);
// console.log(avgKoala);

// let checkWinner = function (avgDolhins, avgKoalas) {
//   return avgKoalas / avgDolhins;
// };
// if (checkWinner(46, 62.7) >= 2) {
//   console.log("Koalalar galaba qozonadi");
// } else {
//   console.log("Hech kim galaba qozonmadi");
// }

// 2-topshiriq

let a = Number(prompt("1-raqamni kiriting:"));
let b = Number(prompt("2-raqamni kiriting"));
let amal = prompt(`amalni tanlang: +, -, *, /`);

function myCal(atr1, atr2) {
  switch (amal) {
    case "+":
      return atr1 + atr2;

    case "*":
      return atr1 * atr2;

    case "-":
      return atr1 - atr2;

    case "/":
      return atr1 / atr2;
    default:
      return `404 not found`;
  }
}
console.log(myCal(a, b));
// let firtstNumber = Number(prompt(`Birinchi raqamni kiriting`));
// let operator = prompt(`Qaysi amalni tanlaymiz( + , - , / , * )`);
// let secondNumber = Number(prompt(`Ikkinchi raqamni kirirting`));

// let summa = function (operator, first, second) {
//   switch (operator) {
//     case "+":
//       alert(first + second);
//       break;
//     case "-":
//       alert(first - second);
//       break;
//     case "/":
//       alert(first / second);
//       break;
//     case "*":
//       alert(first * second);
//       break;
//     default:
//       alert(`Qiymat topilmadi`);
//       break;
//   }
// };
// alert(summa(operator, firtstNumber, secondNumber));
