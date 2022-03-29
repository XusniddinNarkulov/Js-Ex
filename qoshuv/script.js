"use strict";
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let input = document.querySelector("input");
let check = document.querySelector("label");
let firstText = (first.textContent = r());
let secondText = (second.textContent = r());

function r() {
  return Math.round(Math.random() * 10);
}
// console.log(typeof firstText);
check.onclick = (e) => {
  // e.preventDefault();

  if (+input.value === +firstText + +secondText) {
    alert(`to'g'ri topdingiz`);
    location.reload();
    // firstText = r();
    // secondText = r();
  } else {
    location.reload();
    alert(`incorrect \ to'g'ri javob:${+firstText + +secondText}`);
  }
};
