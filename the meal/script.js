"use strict";

const input = document.querySelector("input");
const search = document.querySelector("label");
const notFind = document.querySelector(".notFind");
const grid = document.querySelector(".grid");
const getRecipes = document.getElementsByClassName("child__get-recipe");
const getrecipes = document.querySelectorAll(".child__get-recipe");
const pop = document.querySelector(".pop");
const x = document.querySelector("#x");

search.addEventListener("click", function () {
  fetch();
  if (input.value) {
  }
});
