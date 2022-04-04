"use strict";

const input = document.querySelector("input");
const search = document.querySelector("label");
const notFind = document.querySelector(".notFind");
const grid = document.querySelector(".grid");
const getRecipes = document.getElementsByClassName("child__get-recipe");
const getrecipes = document.querySelectorAll(".child__get-recipe");
const pop = document.querySelector(".pop");
const x = document.querySelector("#x");

function foodName(foodName) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((e) => {
      console.log(e);
      return e.json();
    })
    .then((e) => {
      console.log(e.meals[0]);
      // let meals = e.meals;
      // console.log(meals);
    });
}
foodName("Arrabiata");

search.addEventListener("click", function () {
  if (input.value) {
  }
});
