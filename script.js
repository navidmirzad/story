"use strict";
window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører...");
  showScene(scene1);
}

const scene1 = {
  title: "Story begins",
  text: `                
    <p>text</p>

    <p>text2</p>

    <p>text3</p>`,
  choices: ["Choice #1", "Choice #2"],
};

function showScene(scene) {
  const html = /*html*/ `<div class="scene">
    <h2>${scene.title}</h2>
    <div class="text">
    ${scene.text}
    </div>
    <div class="choices">
        <button>choice #1</button>
        <button>choice #2</button>
    </div>
</div>`;

  document.querySelector("main").insertAdjacentHTML("beforeend", html);
}
