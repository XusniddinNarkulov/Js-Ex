"use strict";

async function func(username) {
  let fetc = await fetch(`https://api.github.com/users/${username}`);
  console.log(fetc);
  let jsn = await fetc.json();
  console.log(jsn);
}
func("XusniddinNarkulov");
