"use strict";

let div = document.querySelectorAll("div");
for (let el of div) {
  console.log(el);
  el.addEventListener("mouseenter", function (e) {
    el.classList.add("width");
  });
  el.addEventListener("mouseleave", function (e) {
    el.classList.remove("width");
  });
}
