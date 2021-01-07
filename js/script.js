import * as winner from "./getWinner.js";

let gameTypeSelected;
let roundsSelected = 0;
let ptsToWin = 0;
let opponent = "No One";

let realPlayer;

let optionsPane = document.getElementById("optionsPane");
let refreshBtn = document.getElementById("refreshBtn");
let readyPane = document.getElementById("readyPane");
let choicePane = document.getElementById("choicePane");
let resultPane = document.getElementById("resultPane");
let declareWin = document.getElementById("declareWin");

let charactersSelected = [];

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

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
    gameTypeSelected = cpuGamePlay;
    realPlayer = false;
    opponent = "CPU";
  });
  player2Btn.addEventListener("click", function () {
    gameTypeSelected = twoGamePlay;
    realPlayer = true;
    opponent = "Player 2";
  });

  quick1Btn.addEventListener("click", function () {
    roundsSelected = 1;
    ptsToWin = 1;
  });
  bestOf5Btn.addEventListener("click", function () {
    roundsSelected = 5;
    ptsToWin = 3;
  });
  bestOf7Btn.addEventListener("click", function () {
    roundsSelected = 7;
    ptsToWin = 4;
  });

  startGameBtn.addEventListener("click", function () {
    if (!gameTypeSelected || roundsSelected === 0) {

    } else {

      startGame(gameTypeSelected, roundsSelected, ptsToWin);
      hideOptions();
      readyPane.classList.remove("d-none");
      winner.gamePlay(realPlayer, roundsSelected, ptsToWin, opponent);
    }
  });
};

loadPage();

let startGame = (gameplayType, numberRounds, ptsWin) => {
  gameplayType();
};

let cpuGamePlay = () => {
};
let twoGamePlay = () => {
};

function hideOptions() {
  optionsPane.classList.add("d-none");
}

function showOptions() {
  location.reload();
}