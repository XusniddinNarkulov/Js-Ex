"use strict";

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let pages = document.querySelector(".pages");
let page = pages.children;
console.log(page);
let blueP = document.querySelector(".blueP");
let blueDiv = document.querySelector(".blueDiv");
let psibling = blueP.nextElementSibling;
// console.log(pages.children);
for (let i = 0; i < page.length; i++) {
  next.addEventListener("click", function (e) {
    if (page[i].classList.contains("blueP")) {
      page[i].nextElementSibling.classList.add("blueDiv");
    }
  });
}
// psibling.classList.add("blueDiv");
// next.addEventListener("click", function (e) {
//   if (psibling) {
//     psibling.classList.add("blueDiv");
//     psibling.nextElementSibling.classList.add("blueP");
//   }
// });
// blueP.nextElementSibling.classList.add("blueDiv");
// psibling.nextElementSibling.classList.add("blueP");
