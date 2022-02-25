let delfin1 = 96;
let delfin2 = 108;
let delfin3 = 89;

let koala1 = 88;
let koala2 = 91;
let koala3 = 110;

let avgDelfin = (delfin1 + delfin2 + delfin3) / 3;
let avgKoala = (koala1 + koala2 + koala3) / 3;
console.log(avgDelfin);
console.log(avgKoala);
if (avgDelfin > avgKoala) {
  console.log(`delfinlar g'alaba qozondi`);
} else if (avgDelfin === avgKoala) {
  console.log(durrang);
} else {
  `koalalar g'alaba qozondi`;
}
// if (avgDelfin >= 100 > avgKoala) {
//   console.log(`delfinlar g'alaba qozondi`);
// } else {
//   console.log(`hech kim g'alaba qozonmadi`);
// }

// ex-2
let userLogin = prompt(`loginni kiriting`);
let userParol = prompt(`parolni kiriting`);
alert(`tabriklaymiz siz tizimga oddiy user bo'lib kirdingiz`);
let adminLogin = prompt(`admin loginni kiriting`);
let adminParol = prompt(`admin parolni kiriting`);
alert(`tabriklaymiz siz tizimga admin bo'lib kirdingiz`);
