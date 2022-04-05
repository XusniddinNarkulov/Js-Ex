"use strict";

const input = document.querySelector("input");
const notFound = document.querySelector(".search__not-found");
const containerMain = document.querySelector(".container__main");
const latestRepos = document.querySelector(".latest-repos__grid");

let jsn;
let el;

async function func(user) {
  let fetc = await fetch(`https://api.github.com/users/${user}`);
  console.log(fetc);
  if (fetc.ok == false) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
  jsn = await fetc.json();
  console.log(jsn);

  latestRepos.innerHTML = "";

  let reposUrl = await fetch(jsn.repos_url);
  let repoJsn = await reposUrl.json();
  console.log(repoJsn[0]);
  renderContainer();

  for (let ele of repoJsn) {
    // console.log(ele);
    el = ele;
    // return el;
    renderLatestRepos();
  }

  return jsn;
  // console.log(jsn.avatar_url);
  // renderContainer();
  // renderLatestRepos();
}
// func("XusniddinNarkulov");

function renderContainer() {
  containerMain.innerHTML = "";
  containerMain.innerHTML = `

  <div class="container__main--left">
    <img src="${jsn.avatar_url}" alt="" />
    <a href="${jsn.html_url}" class="profile">View Profile</a>
  </div>

  <div class="container__main--right">
    <div class="container__main--right--stats">
      <p class="blue">Public Repos: ${jsn.public_repos}</p>
      <p class="grey">Public Gists: ${jsn.public_gists}</p>
      <p class="green">Followers: ${jsn.followers}</p>
      <p class="ocean-blue">Following: ${jsn.following}</p>
    </div>

    <div class="container__main--right--content">
      <p>Company: ${jsn.company}</p>
      <p>Website/Blog: ${jsn.blog}</p>
      <p>Location: ${jsn.location}</p>
      <p>Member Since: ${jsn.created_at}</p>
    </div>
  </div>
</div>

  
  `;
}

function renderLatestRepos() {
  latestRepos.innerHTML += `
<div class="latest-repos__grid--child">
  <a href="${el.html_url}" class="repoLink">${el.name}</a>
  <div class="latest-repos__grid--child--status">
    <p class="blue">Stars: ${el.stargazers_count}</p>
    <p class="grey">Watchers: ${el.watchers}</p>
    <p class="green">Forks: ${el.forks}</p>
  </div>
</div>
  `;
}

input.addEventListener("input", function (e) {
  e.preventDefault();

  func(input.value);
  // e.preventDefault();
  // if (e.key == "Enter") {
  //   func(input.value);
  // renderContainer();
  // renderLatestRepos();
});

// func("sdfsdfslkhsghs");
