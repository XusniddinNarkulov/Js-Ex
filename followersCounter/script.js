"use strict";
let p = document.querySelectorAll("p");
console.log(p);
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let el1 = 0;
let el2 = 0;
let el3 = 0;
let si1 = (p1.textContent = setInterval(function () {
  p1.textContent = el1++;
  if (p1.textContent == 1200) {
    clearInterval(si1);
  }
}, 1));

let si2 = (p2.textContent = setInterval(function () {
  p2.textContent = el2++;
  if (p2.textContent == 500) {
    clearInterval(si2);
  }
}, 1));

let si3 = (p3.textContent = setInterval(function () {
  p3.textContent = el3++;
  if (p3.textContent == 750) {
    clearInterval(si3);
  }
}, 1));
