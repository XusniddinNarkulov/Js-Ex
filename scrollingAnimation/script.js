"use strict";

let btn = document.querySelectorAll(".button");
btnPosition = btn.getBoundingClientRect().top;
let vheight = window.innerHeight;
window.addEventListener("scroll", function () {
  if (btnPosition < vheight) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});
console.log(window.innerHeight);
