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

window.onload = function () {
  let day = 1;
  let hour = 1;
  let minute = 5;
  let sec = 60;
  setInterval(function () {
    document.getElementById("timer").innerHTML =
      day + ` : ` + hour + ` : ` + minute + ` : ` + sec;
    sec--;
    if (sec == 0) {
      minute--;
      sec = 59;
      if (minute == 0) {
        hour--;
        minute = 59;
        if (hour == 0) {
          day--;
          hour = 23;
          if ((day = 0)) {
            clearInterval;
          }
        }
      }
    }
  }, 1000);
};
