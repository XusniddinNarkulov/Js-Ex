"use strict";
let input = document.querySelector("input");
let add = document.querySelector("label");

let content = document.querySelector(".content");
let contentChild = document.querySelector(".content__child");
add.addEventListener("click", function () {
  if (input.value == "") {
    alert("matn kiriting");
  } else {
    content.innerHTML += `<div class="content__child">
  <p>${input.value}</p>
  <button>Delete</button>
</div>`;
    // if (input.value == "") {
    //   alert(`error`);
    // }
    input.value = "";

    let del = document.querySelectorAll("button");
    for (let i = 0; i < del.length; i++) {
      del[i].onclick = function () {
        this.parentElement.remove();
      };
    }
  }
});
