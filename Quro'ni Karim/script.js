"use strict";

async function apiuzb() {
  let prom = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json"
    ),
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json"),
  ]);
  let json1 = await prom[0].json();
  let json2 = await prom[1].json();
  console.log(json2.chapters[1]);

  for (let el of json2.chapters) {
  }
}
apiuzb();

function renderContainer() {
  const container = document.querySelector(".container");
  container.innerHTML += `
<div class="container__child">
  <b>${el.chapter}</b>
  <a href="">${el.name}</a>
  <i>${el.revelation}, 7 oyat </i>
  <b>${el.arabicname}</b>
</div>
  `;
}
