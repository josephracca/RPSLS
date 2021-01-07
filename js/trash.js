// let loadPage = () => {
    let aiPlayerBtn = document.getElementById("aiPlayerBtn");
    let player2Btn = document.getElementById("player2Btn");
    let quick1Btn = document.getElementById("quick1Btn");
    let bestOf5Btn = document.getElementById("bestOf5Btn");
    let bestOf7Btn = document.getElementById("bestOf7Btn");
    let startGameBtn = document.getElementById("startGameBtn");
  
    let selectCharBtn = document.getElementById("selectCharBtn");
    let rockBtn = document.getElementById("rockBtn");
    let paperBtn = document.getElementById("paperBtn");
    let scissorsBtn = document.getElementById("scissorsBtn");
    let lizardBtn = document.getElementById("lizardBtn");
    let spockBtn = document.getElementById("spockBtn");
  
    let confirmBtn = document.getElementById("confirmBtn");
    let selectChar2Btn = document.getElementById("selectChar2Btn");
    let contBtn = document.getElementById("contBtn");
  
    function gameTypeSelected(){};
    let roundsSelected = 0;
  
    aiPlayerBtn.addEventListener("click", function () {
      console.log("CPU Challenege Accepted!");
      gameTypeSelected = cpuGamePlay(); //set game type
    });
    player2Btn.addEventListener("click", function () {
      console.log("Real Human Interaction #covid");
      gameTypeSelected = twoGamePlay();
    });
    quick1Btn.addEventListener("click", function () {
      console.log(`Oh, so you're into that, huh?!`);
      roundsSelected = 1;
    });
    bestOf5Btn.addEventListener("click", function () {
      console.log("First to 3! Lesss go...");
      roundsSelected = 5;
    });
    bestOf7Btn.addEventListener("click", function () {
      console.log(`First to 4. Y'all must have a lot of time to spare!`);
      roundsSelected = 7;
    });
    startGameBtn.addEventListener("click", function () {
    //   console.log("Get Ready!");
    startGame(gameTypeSelected, roundsSelected);

    });
  
  
  
    let character = "";
  
    // REMEMBER REFACTOR
  
    selectCharBtn.addEventListener("click", function () {
      console.log("Choose wisely...");
    });
    rockBtn.addEventListener("click", function () {
      console.log("Rocky Horror Picture Show");
      character = "rock";
    });
    paperBtn.addEventListener("click", function () {
      console.log("Please recycle.");
      character = "paper";
    });
    scissorsBtn.addEventListener("click", function () {
      console.log("Mhmmm, kinky...");
      character = "scissors";
    });
    lizardBtn.addEventListener("click", function () {
      console.log("Lizard");
      character = "lizard";
    });
    spockBtn.addEventListener("click", function () {
      console.log("Spock");
      character = "spock";
    });
  
    confirmBtn.addEventListener("click", function () {
      console.log(`${character} confirmed!`);
    });
    selectChar2Btn.addEventListener("click", function () {
      console.log("Choose wisely Player 2...");
    });
    contBtn.addEventListener("click", function () {
      console.log("ELMO");
    });
  
    let characters = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
  // };
  
  // loadPage();
  
  // console.log(`${gameType}${numberRounds}`);
  
  //code blocks for 2 game options, or a function that will take a function as it's parameter
  
  let startGame = (gameplayType, numberRounds) => {
      console.log(`${gameType}${numberRounds}`);
  };
  
  startGame(gameType, roundsSelected);
  
  // These will get passed in as arguments to the start button function
  let cpuGamePlay = () => {
    console.log("CPU Gameplay Initiated");
  };
  let twoGamePlay = () => {
    console.log("2 Player Gameplay Inititiated");
  };
  
  // API CALL
  let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";
  
  async function getAIChoice(url) {
    let choice = await fetch(url);
    let choice2 = await choice.text();
    console.log(`Shhhh...API Choice: ${choice2}`);
  }
  
  getAIChoice(AIChoiceURL);
  




  //experimental from modules, import/export
  import * as loadAll from "./loadPage.js";

let optionsPane = document.getElementById("optionsPane");
let refreshBtn = document.getElementById("refreshBtn");
let readyPane = document.getElementById("readyPane");
let choicePane = document.getElementById("choicePane");

let charactersSelected = []; //had to take this into the global scope so it can be accessed more than once

loadAll.loadPage();

//code blocks for 2 game options, or a function that will take a function as it's parameter

let startGame = (gameplayType, numberRounds) => {
  console.log(
    `typeof game: ${typeof gameplayType} game: ${gameplayType} rounds: ${numberRounds}`
  );
  gameplayType();
};

// These will get passed in as arguments to the start button function and activate that line of play
let cpuGamePlay = () => {
  console.log("CPU Gameplay Initiated");
};
let twoGamePlay = () => {
  console.log("2 Player Gameplay Inititiated");
};

// API CALL should only be in the CPU gameplay
let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";

async function getAIChoice(url) {
  let choice = await fetch(url);
  console.log(typeof choice);
  let choice2 = await choice.text();
  console.log(`Shhhh...API Choice: ${choice2}`);
}

getAIChoice(AIChoiceURL);

//function that deactivates options...
function hideOptions() {
  optionsPane.classList.add("d-none");
}

function showOptions() {
  location.reload();
}

export {cpuGamePlay, startGame};





if (!type) {
  //CPU, API CALL here

  // API CALL should only be in the CPU gameplay
  let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";

  async function getAIChoice(url) {
    let choice = await fetch(url);
    // console.log(typeof choice);
    let choice2 = await choice.text();
    console.log(`Shhhh...API Choice: ${choice2}`);
    character = choice2;
    charactersSelected.push(character);
    cpuBtn.classList.remove("d-none");
  }

  getAIChoice(AIChoiceURL);
} else {
  //real game

}