"use strict";

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");
buttons = [...buttons];
console.log(buttons);
buttons.map((val) => {
  val.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.textContent = "";
        break;
      case "=":
        display.textContent = eval(display.textContent);
        break;
      case "←":
        display.textContent = display.textContent.slice(0, -1);
        break;

      default:
        display.textContent += e.target.textContent;
    }
  });
});
// buttons.map((val) => {
//   val.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         display.textContent = "";
//     }
//   });
// });
