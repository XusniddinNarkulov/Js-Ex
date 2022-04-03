"use strict";

let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let h2 = document.querySelector(".h2");
let h1 = document.querySelector(".h1");

fetch(
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
)
  .then((e) => e.json())
  .then((e) => {
    console.log(e);
    for (let [key, val] of Object.entries(e)) {
      select2.innerHTML += `<option value="">${val}</option>`;
      h1.textContent = `10 000 ${key}`;
    }
    return;
  });

window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    h2.textContent = `${input1.value} EURO`;
  }
});
