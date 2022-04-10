"use strict";
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
async function apiuzb() {
  let prom = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json"
    ),
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json"),
    fetch(`https://quranenc.com/api/translation/sura/uzbek_mansour/1`),
  ]);

  let json1 = await prom[0].json();
  let json2 = await prom[1].json();
  let json3 = await prom[2].json();
  console.log(json2.chapters[1]);
  // console.log(json1.quran[0]);
  console.log(json3);

  for (let el of json2.chapters) {
    renderContainer(el);
    renderPopup(el);
  }

  let suralar = document.querySelectorAll("a");
  for (let el of suralar) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log("hello");
      popup.style.display = "block";
      // popup.classList.add("visible");
    });
  }
  let x = document.querySelector(".popup__x-icon");
  x.addEventListener("click", function (e) {
    popup.style.display = "none";
  });
}
apiuzb();

async function apiPop(suraRaqami) {
  let fet = await fetch(
    `https://quranenc.com/api/translation/sura/uzbek_mansour/${suraRaqami}`
  );
  let json = await fet.json();
  console.log(json.result[0]);

  for (let el of json.result) {
    renderOyat(el);
  }
  return json.result;
}
apiPop(1);

function renderContainer(el) {
  // const container = document.querySelector(".container");
  container.innerHTML += `
<div class="container__child">
  <b>${el.chapter}</b>
  <a href="#" id="${el.chapter}"> ${el.name}</a>
  <i>${el.revelation} </i>&nbsp;&nbsp;&nbsp
  <b>${el.arabicname}</b>
</div>
  `;

  // let sura = document.getElementById(`${el.chapter}`);
}

function renderPopup(el) {
  popup.innerHTML = `
  <p class="popup__x-icon">❌</p>

  <b class="">${el.chapter} ${el.name} surasi</b>

  <div class="popup__oyat"></div>

  <audio class="audio" controls src=""></audio>
  `;
}

function renderOyat(a) {
  const oyatlar = document.querySelector(".popup__oyat");
  oyatlar.innerHTML += `
  <div class="popup__child">
    <p class="popup__child--arabic">${a.arabic_text}</p>
    <p class="popup__child--uzb">
      <b>${a.aya}.</b> ${a.translation}
    </p>
  </div>
  `;
}

// let element = document.getElementById("1");
// console.log(element);
