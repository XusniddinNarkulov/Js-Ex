"use strict";

let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let s = 59;
let si = setInterval(function () {
  second.textContent = s--;
  if (second.textContent < 0) {
    minute.textContent = minute.textContent - 1;
    second.textContent = 59;
    clearInterval(si);
    s--;
  }
}, 10);
