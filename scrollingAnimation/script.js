"use strict";

let btn = document.querySelectorAll(".button");
console.log(btn);
let btnPosition;
let vheight = window.innerHeight;
btn.forEach(function (val) {
  console.log(val.getBoundingClientRect());
  btnPosition = val.getBoundingClientRect().top;
});

// window.addEventListener("scroll", function () {
//   if (btnPosition < vheight) {
//     btn.classList.add("active");
//   } else {
//     btn.classList.remove("active");
//   }
// });+
console.log(window.innerHeight);
