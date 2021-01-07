import * as winner from "./getWinner.js";

let gameTypeSelected;
let roundsSelected;
let ptsToWin;
let opponent;

let realPlayer;

let optionsPane = document.getElementById("optionsPane");
let refreshBtn = document.getElementById("refreshBtn");
let readyPane = document.getElementById("readyPane");
let choicePane = document.getElementById("choicePane");
let resultPane = document.getElementById("resultPane");
let declareWin = document.getElementById("declareWin");

// let charactersSelected = [];

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

let loadPage = () => {
refreshBtn.addEventListener("click", function () {
    showOptions();
  });

  let aiPlayerBtn = document.getElementById("aiPlayerBtn").addEventListener("click", function () {
    gameTypeSelected = cpuGamePlay;
    realPlayer = false;
    opponent = "CPU";
  });
  let player2Btn = document.getElementById("player2Btn").addEventListener("click", function () {
    gameTypeSelected = twoGamePlay;
    realPlayer = true;
    opponent = "Player 2";
  });

  let quick1Btn = document.getElementById("quick1Btn").addEventListener("click", function () {
    roundsSelected = 1;
    ptsToWin = 1;
  });
  let bestOf5Btn = document.getElementById("bestOf5Btn").addEventListener("click", function () {
    roundsSelected = 5;
    ptsToWin = 3;
  });
  let bestOf7Btn = document.getElementById("bestOf7Btn").addEventListener("click", function () {
    roundsSelected = 7;
    ptsToWin = 4;
  });

  let startGameBtn = document.getElementById("startGameBtn").addEventListener("click", function () {
    if (!gameTypeSelected || roundsSelected === 0) {
alert('choose options to play');
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