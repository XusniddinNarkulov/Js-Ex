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

// function myFunction(arr) {
//    const res = arr.reduce((acc, val) => {
//       return acc[val] ? ++acc[val] : (acc[val] = 1), acc;
//    }, {});
//    return res;
// }
// console.log(myFunction([2, 2, 2, 4, 88, 88]));

// function myFunction(obj) {
//    return {
//       fn: obj.fn,
//       ln: obj.ln,
//       ...(obj.size && { size: `${obj.size}cm` }),
//       ...(obj.weight && { weight: `${obj.weight}kg` }),
//    };
// }
// console.log(
//    myFunction({
//       fn: "Martin",
//       ln: "Harper",
//       age: 26,
//       email: "martin.harper@test.de",
//       weight: 102,
//    })
// );

// function myFunction(obj) {
//    let newObj = {};
//    for (let el in obj) {
//       console.log(el);
//       newObj[el] = obj[el].trim() === "" ? null : obj[el];
//    }
//    return newObj;
// }
// console.log(myFunction({ a: "", b: "b", c: " ", d: "d" }));

// function myFunction(obj) {
//    let newObj = {};
//    for (let [k, v] of Object.entries(obj)) {
//       newObj[v] = k;
//    }
//    return newObj;
// }
// console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" }));

// function myFunction(a, b) {
//    let newObj = {};
//    for (let [k, v] of Object.entries(a)) {
//       newObj[k] = v * b;
//    }
//    return newObj;
// }
// console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));

// function myFunction(a, b) {
//    let newObj = {};
//    a.map((val, key) => {
//       newObj[val] = b[key];
//    });
//    return newObj;
// }
// console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));

// function myFunction(a, b) {
//    console.log(a);
//    return +a === +b;
// }
// console.log(
//    myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );

//dom
// const input = document.getElementById("input");
// input.addEventListener("input", () => {
//    // type in your code here
//    let list = document.getElementsByTagName("li");

//    for (let el of list) {
//       text = el.textContent || el.innerText;
//       if (text.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
//          el.style.display = "";
//       } else {
//          el.style.display = "none";
//       }
//    }
// });

//sets
function myFunction(a, b) {
   let arr1 = [...a];
   let arr2 = [...b];
   let newArr = [];
   for (let el of arr1) {
      if (arr2.includes(el)) {
         newArr.push(el);
      }
   }
   return new Set([...newArr]);
}
console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
