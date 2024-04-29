"use strict";
window.addEventListener("load", start);

let currentSceneIndex = 0;

function start() {
  console.log("JavaScript kører...");
  showScene(scenes[currentSceneIndex]);
}

const scenes = [
  {
    title: "Story begins",
    text: `
          <p>text</p>
          <p>text2</p>
          <p>text3</p>`,
    choices: ["Choice #1", "Choice #2"],
    nextScenes: [1, 2], // Indexes of next scenes based on choices
  },
  {
    title: "At the Lake",
    text: `
      <p>WUHUU NICE weather</p>
      <p>Im getting kind of hungry...</p>
      <p>I should get something to eat</p>`,
    choices: ["Pizza", "Go home and cook dinner"],
    nextScenes: [2, 3], // Indexes of next scenes based on choices
  },
  {
    title: "On my way to get a Pizza",
    text: `
      <p>FeelsGoodMan</p>
      <p>Let me order the kebab pizza yum...</p>
      <p>THEY DONT HAVE KEBAB?!</p>`,
    choices: [
      "Find another place to eat Pizza",
      "Eat a different Pizza today?",
      "Go home and cook dinner",
    ],
    nextScenes: [3, 4, 4], // Indexes of next scenes based on choices
  },
  {
    title: "Home and cooking dinner",
    text: `
      <p>Im so tired I should have gotten the pizza</p>
      <p></p>
      <p>Im out of milk NOO</p>`,
    choices: ["Order a pizza", "Starve yourself", "Go grocery shopping"],
    nextScenes: [3, 4, 4], // Indexes of next scenes based on choices
  },
];

function showScene(scene) {
  const html = `
      <div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">
          ${scene.text}
        </div>
        <div class="choices">
          ${scene.choices
            .map(
              (choice, index) =>
                `<button onclick="handleChoice(${scene.nextScenes[index]})">${choice}</button>`
            )
            .join(" ")}
        </div>
      </div>`;

  const sceneElement = document.createElement("div");
  sceneElement.innerHTML = html;
  document.querySelector("main").appendChild(sceneElement); // Append new scene to main
}

function handleChoice(nextSceneIndex) {
  currentSceneIndex = nextSceneIndex;
  showScene(scenes[currentSceneIndex]);
}
