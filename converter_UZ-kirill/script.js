"use strict";

let first = document.querySelector("#first");
let second = document.querySelector("#second");

const obj = {
  q: "қ",
  e: "е",
  r: "р",
  t: "т",
  y: "й",
  u: "у",
  i: "и",
  o: "о",
  p: "п",
  a: "а",
  s: "c",
  d: "д",
  f: "ф",
  g: "г",
  h: "ҳ",
  j: "ж",
  k: "к",
  l: "л",
  z: "з",
  x: "х",
  c: "с",
  v: "в",
  b: "б",
  n: "н",
  m: "м",
  yo: "ё",
  ya: "я",
  yu: "ю",
  ch: "ч",
  sh: "ш",
};

const map = new Map(Object.entries(obj));

map.set("o'", "ў");
map.set("g'", "ғ");
map.set("'", "ъ");
console.log(map);

// const el = document.createElement("h1");
// el.classList.add("qwer");
// el.classList.add("text");
// el.classList.remove("qwer");
// el.classList.toggle("text");
// el.classList.toggle("zxc");
// console.log(el.className);
// console.log(el.classList.contains("zxc"));
// el.textContent = "hello";
// console.log(el);
// el.innerHTML = "<p>salom</p>";
// let secondd = document.querySelector("#second");
// secondd.before(el);
// secondd.after(el.cloneNode(true));
// document.querySelector(".zxc").remove();

// document.querySelector("#second").style.border = "10px solid black";
// document.documentElement.style.setProperty("--rang", "purple");

// console.log(document.querySelector("#second").getAttribute("tip"));
// console.log(getComputedStyle(document.querySelector("form")).gap);
// document.querySelector("form").style.gap = 5 + "%";
// secondd.tip = "uzbek";
// console.log(secondd.tip);
