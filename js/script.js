import * as winner from './getWinner.js';

let gameTypeSelected;
let roundsSelected = 0;
let ptsToWin = 0;

let realPlayer;

let optionsPane = document.getElementById("optionsPane");
let refreshBtn = document.getElementById("refreshBtn");
let readyPane = document.getElementById("readyPane");
let choicePane = document.getElementById("choicePane");
let resultPane = document.getElementById("resultPane");
let declareWin = document.getElementById("declareWin");

let charactersSelected = []; //had to take this into the global scope so it can be accessed more than once

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

//loadPage only needs to have the options panel
let loadPage = () => {
  let aiPlayerBtn = document.getElementById("aiPlayerBtn");
  let player2Btn = document.getElementById("player2Btn");
  let quick1Btn = document.getElementById("quick1Btn");
  let bestOf5Btn = document.getElementById("bestOf5Btn");
  let bestOf7Btn = document.getElementById("bestOf7Btn");
  let startGameBtn = document.getElementById("startGameBtn");

  refreshBtn.addEventListener("click", function () {
    showOptions();
  });



  aiPlayerBtn.addEventListener("click", function () {
    console.log("CPU Challenege Accepted!");
    gameTypeSelected = cpuGamePlay;
    realPlayer = false; //set game type
  });
  player2Btn.addEventListener("click", function () {
    console.log("Real Human Interaction #covid");
    gameTypeSelected = twoGamePlay;
    realPlayer = true;
  });

  // GAMES
  quick1Btn.addEventListener("click", function () {
    console.log(`Oh, so you're into that, huh?!`);
    roundsSelected = 1;
    ptsToWin = 1;
  });
  bestOf5Btn.addEventListener("click", function () {
    console.log("First to 3! Lesss go...");
    roundsSelected = 5;
    ptsToWin = 3;
  });
  bestOf7Btn.addEventListener("click", function () {
    console.log(`First to 4. Y'all must have a lot of time to spare!`);
    roundsSelected = 7;
    ptsToWin = 4;
  });

  // console.log(gameTypeSelected() === undefined);
  // console.log(gameTypeSelected() === undefined || roundsSelected === 0);

  startGameBtn.addEventListener("click", function () {
    if (!gameTypeSelected || roundsSelected === 0) {
    //   startGame(gameTypeSelected, roundsSelected);
      console.log("please complete game options");
    } else {
      console.log("Onward");
      startGame(gameTypeSelected, roundsSelected, ptsToWin);
      hideOptions();
      readyPane.classList.remove("d-none");
      winner.gamePlay(realPlayer, roundsSelected, ptsToWin);
    }
  });

  
};

loadPage();

//code blocks for 2 game options, or a function that will take a function as it's parameter

let startGame = (gameplayType, numberRounds, ptsWin) => {
  console.log(
    `typeof game: ${typeof gameplayType} game: ${gameplayType} rounds: ${numberRounds} to win: ${ptsWin}`
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

//function that deactivates options...
function hideOptions() {
  optionsPane.classList.add("d-none");
}

function showOptions() {
  location.reload();
}

// getWinner.getWinner();

// function getWinner(){
//     //pull in array
//     console.log(charactersSelected);
// }

// winner.getWinner(charactersSelected);

// export {charactersSelected};