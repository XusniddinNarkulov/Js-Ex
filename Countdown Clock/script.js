"use strict";

// let day = document.querySelector(".day");
// let hour = document.querySelector(".hour");
// let minute = document.querySelector(".minute");
// let second = document.querySelector(".second");

// let s = second.textContent;
// let m = minute.textContent;
// console.log();

// let si = setInterval(function () {
//   --s;
//   if (s == 0) {
//     --m;
//     s = 60;
//   }
// }, 10);

// window.onload = function () {
let day = 0;
let hour = 1;
let minute = 5;
let sec = 59;
let si = setInterval(function () {
  document.querySelector("body").innerHTML = `<div class="container">
    <div class="child">
      <p class="day">${day}</p>
      <i>Days</i>
    </div>
    <div class="child">
      <p class="hour">${hour}</p>
      <i>Hours</i>
    </div>
    <div class="child">
      <p class="minute">${minute}</p>
      <i>Minutes</i>
    </div>
    <div class="child">
      <p class="second">${sec}</p>
      <i>Seconds</i>
    </div>
  </div>`;
  sec--;
  if (sec == -1) {
    minute--;
    sec = 59;
    if (minute == -1) {
      hour--;
      minute = 59;
      if (hour == -1) {
        day--;
        hour = 23;
        if (day == -1) {
          clearInterval(si);
        }
      }
    }
  }
}, 1);
// };
