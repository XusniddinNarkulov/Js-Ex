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
