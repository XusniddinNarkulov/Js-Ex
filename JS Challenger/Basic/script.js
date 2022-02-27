// let a = "salom";
// let myArr = [];
// let arr2 = ["sa", "la", "m"];
// // console.log(a[2 - 1]);
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   myArr.push(a[i]);
// }
// console.log(myArr);
// let b = arr2.join("o");
// console.log(b);
// console.log(b.charAt(b.length - 1));

// function myFunction(a, b) {
//   b.split("");
//   let t = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (a === b[i]) {
//       t++;
//     } else {
//       continue;
//     }
//   }
//   return t;
// }

function myFunction(a, b) {
  return b.split(a).length - 1;
}
console.log(myFunction(`m`, `how much money`));
