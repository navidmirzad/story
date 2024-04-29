window.addEventListener("load", start);

let currentScene;

const scene1A = {
  title: "At the Lake",
  text: /*html*/ `
        <p>WUHUU NICE weather</p>
        <p>Im getting kind of hungry...</p>
        <p>I should get something to eat</p>`,
  choices: [
    { name: "Pizza", node: null },
    { name: "Go home and cook dinner", node: null },
  ],
};

const scene1B = {
  title: "On my way to get a Pizza",
  text: /*html*/ `
        <p>FeelsGoodMan</p>
        <p>Let me order the kebab pizza yum...</p>
        <p>THEY DONT HAVE KEBAB?!</p>`,
  choices: [
    { name: "Find another place to eat Pizza", node: null },
    { name: "Eat a different Pizza today?", node: null },
    { name: "Go home and cook dinner", node: null },
  ],
};

const scene1C = {
  title: "Home and cooking dinner",
  text: /*html*/ `
        <p>Im so tired I should have gotten the pizza</p>
        <p></p>
        <p>Im out of milk NOO</p>`,
  choices: [
    { name: "Order a pizza", node: null },
    { name: "Starve yourself", node: null },
    { name: "Go grocery shopping", node: null },
  ],
};

// Story begins here:
const scene1 = {
  title: /*html*/ "Story begins",
  text: `
            <p>It's a warm summer day and you're planning on going to the Lake to have a calm day off.</p>
            <p>Question is how do we get to the lake? All public transportation is not in service this week...</p>
            <p>What are we gonna do?</p>`,
  choices: [
    { name: "Choice #1", node: scene1A },
    { name: "Choice #2", node: scene1B },
  ],
};

function start() {
  console.log("JavaScript kører...");
  registerButtonClicks();
  currentScene = scene1;
  showScene(currentScene);
}

function registerButtonClicks() {
  document.querySelector("main").addEventListener("click", userClicked);
}

function userClicked(event) {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    buttonClicked(target);
  }
}

function buttonClicked(button) {
  //knapper fjernes
  button.parentElement.remove();
  //find index for knap
  const index = Number(button.id.substring(10));
  //find choice med det index
  const choice = currentScene.choices[index];

  currentScene = choice.node;

  showScene(currentScene);

  console.log(choice);
}

function showScene(scene) {
  const html = `<div class="scene">
    <h2>${scene.title}</h2>
    <div class="text">
    ${scene.text}
    </div>
    <div class="choices">
    ${scene.choices
      .map(
        (choice, i) =>
          "<button id='btn-choice" + i + "'>" + choice.name + "</button>"
      )
      .join(" ")}
    </div>
    </div>`;

  document.querySelector("main").insertAdjacentHTML("beforeend", html);
}
