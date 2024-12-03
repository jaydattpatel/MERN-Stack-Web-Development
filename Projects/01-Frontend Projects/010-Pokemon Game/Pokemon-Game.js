let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

document.querySelector("#p1_name").textContent = "Player-1";
document.querySelector("#p2_name").textContent = "Player-2";

let scoreP1 = 0;
let scoreP2 = 0;
let fightBtn = document.querySelector("#fight");

let listOfPockemon = [];
let random = [];

fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: Fetching Pokemon List`);
    }
    return response.json();
  })
  .then((data) => {
    listOfPockemon = data["results"];
    // console.log(listOfPockemon);
  })
  .catch((err) => console.error(err));

fightBtn.addEventListener("click", () => {
  random = [];
  for (let i = 0; i < 2; i++) {
    let val;
    do {
      random.push(Math.round(Math.random() * 100) % listOfPockemon.length);
    } while (random.includes(val));
  }
  // console.log(random);
  update();
});

let pok1_img;
let pok1_name;
let pok1_exp;
let pok1_abilities;

let pok2_img;
let pok2_name;
let pok2_exp;
let pok2_abilities;

function update() {
  pok1_abilities = [];
  pok2_abilities = [];

  fetch(listOfPockemon[random[0]]["url"])
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: Fetching Pokemon-1`);
      }
      return response.json();
    })
    .then((data) => {
      pok1_name = listOfPockemon[random[0]]["name"];
      pok1_img = data["sprites"]["other"]["dream_world"]["front_default"];
      pok1_exp = data["base_experience"];
      pok1_abilities = data["abilities"];

      addPlayer1();

      return fetch(listOfPockemon[random[1]]["url"]);
    })
    .catch((err) => console.error(err))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: Fetching Pokemon-2`);
      }
      return response.json();
    })
    .then((data) => {
      pok2_name = listOfPockemon[random[1]]["name"];
      pok2_img = data["sprites"]["other"]["dream_world"]["front_default"];
      pok2_exp = data["base_experience"];
      pok2_abilities = data["abilities"];

      addPlayer2();
    })
    .catch((err) => console.error(err));
}

function addPlayer1() {
  let image = player1.querySelector("#img");
  let name = player1.querySelector("#name");
  let experience = player1.querySelector("#experience");
  let abilities = player1.querySelector("#abilities");
  abilities.innerHTML = "";

  image.innerHTML = `<img src=${pok1_img}>`;
  name.textContent = "Name: " + pok1_name;
  experience.textContent = "Experience: " + pok1_exp;

  for (let ability of pok1_abilities) {
    let li = document.createElement("li");
    li.textContent = ability["ability"]["name"];
    abilities.appendChild(li);
  }
}

function addPlayer2() {
  let image = player2.querySelector("#img");
  let name = player2.querySelector("#name");
  let experience = player2.querySelector("#experience");
  let abilities = player2.querySelector("#abilities");
  abilities.innerHTML = "";

  image.innerHTML = `<img src=${pok2_img}>`;
  name.textContent = "Name: " + pok2_name;
  experience.textContent = "Experience: " + pok2_exp;

  for (let ability of pok2_abilities) {
    let li = document.createElement("li");
    li.textContent = ability["ability"]["name"];
    abilities.appendChild(li);
  }

  scoreUpdate();
}

function scoreUpdate() {
  if (pok1_exp > pok2_exp) {
    scoreP1++;
  } else if (pok1_exp < pok2_exp) {
    scoreP2++;
  }
  document.querySelector("#p1_score").textContent = `Score: ${scoreP1}`;
  document.querySelector("#p2_score").textContent = `Score: ${scoreP2}`;
}
