"use strict";

let fromLang = document.querySelector("#from");
let toLang = document.querySelector("#to");

let fromInput = document.querySelector(".from__area");
let toInput = document.querySelector(".to__area");

let changer = document.querySelector(".changer");
let btn = document.querySelector(".run__btn");

let langs = [];
let langsArr = [];

fromInput.addEventListener("input", function (e) {
  e.preventDefault();
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", fromInput.value);
  encodedParams.append("target", toLang.value);
  encodedParams.append("source", fromLang.value);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      toInput.innerHTML = response.data.translations[0].translatedText;
      console.log(response.data.translations[0].translatedText);
    })
    .catch((err) => console.error(err));
});

const encodedParams = new URLSearchParams();
// console.log(encodedParams);
encodedParams.append("q", fromInput.value);
encodedParams.append("target", toLang.value);
encodedParams.append("source", fromLang.value);

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
  },
  body: encodedParams,
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  options
)
  .then((response) => response.json())
  .then((response) => {
    langs = response.data.languages;
    langs.forEach((element) => {
      let opt = `<option value="${element.language}">${element.language}</option>`;
      fromLang.insertAdjacentHTML("beforeend", opt);
      toLang.insertAdjacentHTML("beforeend", opt);
    });
  })
  .catch((err) => console.error(err));
