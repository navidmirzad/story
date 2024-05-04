window.addEventListener("load", start);

let currentScene;

// Story begins here:
const startScene = {
  title: /*html*/ "Story begins",
  text: `
            <p>It's a warm summer day and you're planning on going to the Lake to have a calm day off.</p>
            <p>Question is how do we get to the lake? All public transportation is not in service this week...</p>
            <p>What are we gonna do?</p>`,
  choices: [
    { name: "Take the bike", node: null },
    { name: "Stay home and play video games", node: null },
  ],
};

const lakeScene = {
  title: "At the Lake",
  text: /*html*/ `
        <p>Finally, we're finally at the lake... Let's go and lay down by the water and just sunbathe for a bit.</p>
        <p>I got my sunglasses, my sunscreen and my speaker for some great vibes... Life sure is sweet!</p>
        <p>I FORGOT MY SNACKS, HOW COULD THIS HAPPEN. *stomach says brurururu*... I should get something to eat</p>`,
  choices: [
    { name: "Go get a pizza", node: null },
    { name: "Go home and cook dinner", node: null },
  ],
};

const homeScene = {
  title: "Video games at home",
  text: /*html*/ `
        <p>I'm, actually completely okay with staying home lol.</p>
        <p>TIME TO PLAY THAT NEW GAME I GOT LAST WEEK, WOOO!</p>
        <p>I'm getting kind of hungry though... I should get something to eat</p>`,
  choices: [
    { name: "Pizza", node: null },
    { name: "Stay home and cook dinner", node: null },
  ],
};

const pizzaScene = {
  title: "On my way to get a Pizza",
  text: /*html*/ `
        <p>FeelsGoodMan, it's that time of the week... time to get that salad kebab pizza baby!</p>
        <p>I been thinking 'bout it, oh no, no, no... I been thinking about you, do you think about me still... kebab pizza yum...</p>
        <p>THEY DONT HAVE KEBAB?!</p>`,
  choices: [
    { name: "Go home and cry", node: null },
    { name: "Go home and cook dinner", node: null },
  ],
};

const cookingScene = {
  title: "Home and cooking dinner",
  text: /*html*/ `
        <p>Alright let's see what we're working with: *opens fridge as a tumbleweed passes by*</p>
        <p>Im so tired I should have gotten the pizza</p>
        <p>We're out of milk too, so no cereal... no cup noodles either. A dire situation</p>`,
  choices: [
    { name: "Go get a pizza", node: null },
    { name: "Go grocery shopping", node: null },
  ],
};

const cryingScene = {
  title: "Crying at home",
  text: /*html*/ `
        <p>gg wp</p>`,
  choices: [],
};

const shoppingScene = {
  title: "Grocery Shopping",
  text: /*html*/ `
        <p>Alright lets just get a frozen pizza and some snacks for now.</p>
        <p>It's not the kebab pizza but it'll do... I guess</p>
        <p>What a day... I'm just gonna go home and eat now</p>
        `,
  choices: [{ name: "Go home", node: null }],
};

function start() {
  console.log("JavaScript kører...");
  registerButtonClicks();
  currentScene = startScene;
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

function setNodes(scenes, nodes) {
  scenes.forEach((scene, index) => {
    scene.choices.forEach((choice, choiceIndex) => {
      choice.node = nodes[index][choiceIndex];
    });
  });
}

setNodes(
  [startScene, lakeScene, homeScene, pizzaScene, cookingScene],
  [
    [lakeScene, homeScene], // nodes for startScene choices
    [pizzaScene, cookingScene], // nodes for lakeScene choices
    [pizzaScene, cookingScene], // nodes for homeScene choices
    [cryingScene, cookingScene], // nodes for pizzaScene choices
    [cryingScene, shoppingScene], // nodes for cookingScene choices
  ]
);
