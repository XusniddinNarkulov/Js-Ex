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

// function myFunction(a, b) {
//   return b.split(a).length - 1;
// }
// console.log(myFunction(`m`, `how much money`));

// let num = 22;
// console.log(num.toString().split("").map(Number));

// let str = "bnchmf";
// let arr = [];
// console.log(
//   str.split("").forEach((val) => {
//     let code = val.charCodeAt() + 1;

//     console.log(arr.push(String.fromCharCode(code)));
//   })
// );

// console.log(arr.join(""));

// function myFunction(str) {
//   let arr = [];
//   str.split("").forEach((val) => {
//     let code = val.charCodeAt() + 1;
//     arr.push(String.fromCharCode(code));
//   });
//   let b = arr.join("");
//   return b;
// }
// console.log(myFunction("bnchmf"));

// function myFunction(a, b) {}

// myFunction("1234567", ".");
// let a = 1234567;
// console.log(Math.round(a.toString().length / 3));
// console.log(a.toString().split("").reverse().splice(0, 3));
// console.log(str.match(1, 3));

function myFunction(arr) {
   const res = arr.reduce((acc, val) => {
      return acc[val] ? ++acc[val] : (acc[val] = 1), acc;
   }, {});
   return res;
}

console.log(myFunction([2, 2, 2, 4, 88, 88]));
