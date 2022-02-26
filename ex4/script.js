// topshiriq 1
let harajat = Number(prompt(`hisob-kitob narxini kiriting:`));
let usluga1 = Number(harajat * 0.15);
let usluga2 = Number(harajat * 0.2);
let summa = Number;
console.log(`harajat: ${harajat}dollar`);
// if (harajat >= 50 && harajat < 300) {
//   console.log(`usluga 15% : ${usluga1} dollar`);
//   console.log(`obshiy summa : ${usluga1 + harajat} dollar`);
// } else {
//   console.log(`usluga 20% : ${usluga2} dollar`);
//   console.log(`obshiy summa : ${usluga2 + harajat} dollar`);
// }

// endi ternary operatorda yozamiz
harajat >= 50 && harajat < 300
  ? console.log(
      `usluga 15% : ${usluga1} dollar \n obshiy summa : ${
        usluga1 + harajat
      } dollar`
    )
  : console.log(
      `usluga 20% : ${usluga2} dollar \n obshiy summa : ${
        usluga2 + harajat
      } dollar`
    );

// harajat >= 50 && harajat < 300
//   ? console.log(`usluga 15% : ${usluga1} dollar`)
//     ? console.log(`obshiy summa : ${usluga1 + harajat} dollar`)
//     : console.log(`usluga 20% : ${usluga2} dollar`)
//   : console.log(`obshiy summa : ${usluga2 + harajat} dollar`);

// topshiriq 2
// let age = Number(prompt(`yoshingizni kiriting`));
// let kun = Number(age * 365 + Math.trunc(age / 4));
// console.log(`siz ${kun} kundan beri yashayapsiz`);
// let soat = Number(kun * 24);
// console.log(`siz ${soat} soatdan beri yashayapsiz`);
// let minut = Number(soat * 60);
// console.log(`siz ${minut} minutdan beri yashayapsiz`);
// let soniya = Number(minut * 60);
// console.log(`siz ${soniya} soniyadan beri yashayapsiz`);
