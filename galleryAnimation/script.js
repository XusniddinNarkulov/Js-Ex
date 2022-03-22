"use strict";

let gallery = document.querySelector(".gallery");
let child = document.getElementsByClassName("child");

gallery.addEventListener("click", function (e) {
  for (let el of child) {
    el.classList.remove("view");
  }
  e.target.classList.add("view");
});
