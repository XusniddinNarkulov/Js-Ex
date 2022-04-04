"use strict";

const input = document.querySelector("input");
const search = document.querySelector("label");
const notFind = document.querySelector(".notFind");
const grid = document.querySelector(".grid");
const getRecipes = document.getElementsByClassName("child__get-recipe");
const getrecipes = document.querySelectorAll(".child__get-recipe");
const pop = document.querySelector(".pop");

// function foodName(foodName) {
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
  .then((e) => {
    console.log(e);
    return e.json();
  })
  .then((e) => {
    console.log(e.meals[0]);
    let el = e.meals[0];
    // let meals = e.meals;
    // console.log(meals);
    search.addEventListener("click", function (e) {
      e.preventDefault();
      if (input.value == "Arrabiata") {
        grid.innerHTML += `
        <div class="child">
          <img class="child__img" src="${el.strMealThumb}" alt="" />
          <h3 class="child__food-name">${el.strMeal}</h3>
          <a class="child__get-recipe" href="">Get Recipe</a>
        </div>
        `;

        pop.innerHTML = `
        <h2 class="pop__x" id="x">❎</h2>
        <h2 class="pop__food-name">${el.strMeal}</h2>
        <p class="bg-white">${el.strCategory}</p>
        <h3>Instructions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          optio consequuntur, eaque quaerat quia nesciunt sapiente fuga quos
          cupiditate reprehenderit earum, dignissimos aut sint sunt expedita
          itaque quae amet.
        </p>
        <img src="${el.strMealThumb}" alt="" class="pop__img" />
        <a href="">Watch Video</a>
        `;

        const x = document.querySelector("#x");

        // pop.classList.add("visible");

        getRecipes[0].addEventListener("click", function (e) {
          e.preventDefault();
          pop.classList.add("visible");
        });

        x.addEventListener("click", function (e) {
          e.preventDefault();
          pop.classList.remove("visible");
        });

        notFind.style.display = "none";
      } else {
        notFind.style.display = "block";
      }
    });
  });
// }
// foodName("Arrabiata");

function foodList() {
  fetch(`www.themealdb.com/api/json/v1/1/search.php?f=a
  `)
    .then((e) => {
      return e.json();
    })
    .then((e) => {
      console.log(e);
      return e;
    });
}
foodList();
