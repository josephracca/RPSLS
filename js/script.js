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

let mode = document.getElementById("mode");
let rounds = document.getElementById("rounds");

let allTheHands = document.getElementById("allTheHands");

let bodyOdyOdy = document.getElementById("bodyOdyOdy");

let loadPage = () => {
refreshBtn.addEventListener("click", function () {
    showOptions();
  });

  let aiPlayerBtn = document.getElementById("aiPlayerBtn").addEventListener("click", function () {
    gameTypeSelected = cpuGamePlay;
    realPlayer = false;
    opponent = "CPU";
    mode.innerText = "A ROBOT";
    nameSpace2.innerText = "THE ROBOT";
    checkAgain();
  });
  let player2Btn = document.getElementById("player2Btn").addEventListener("click", function () {
    gameTypeSelected = twoGamePlay;
    realPlayer = true;
    opponent = "Player 2";
    mode.innerText = "A NON-ROBOT";
    checkAgain();
    nameSpace2.innerText = "PLAYER 2";
  });

  let quick1Btn = document.getElementById("quick1Btn").addEventListener("click", function () {
    roundsSelected = 1;
    ptsToWin = 1;
    rounds.innerText = "ONE AND DONE!";
    checkAgain();
  });
  let bestOf5Btn = document.getElementById("bestOf5Btn").addEventListener("click", function () {
    roundsSelected = 5;
    ptsToWin = 3;
    rounds.innerText = "THREE";
    checkAgain();
  });
  let bestOf7Btn = document.getElementById("bestOf7Btn").addEventListener("click", function () {
    roundsSelected = 7;
    ptsToWin = 4;
    rounds.innerText = "FIVE";
    checkAgain();
  });

  let startGameBtn = document.getElementById("startGameBtn");
  let gameName = document.getElementById("gameName");
  let credits = document.getElementById("credits");

  // startGameBtn.classList.remove("disabled");

// console.log(!gameTypeSelected);
// console.log(typeof roundsSelected === 'undefined');
// console.log(roundsSelected);

  function checkAgain(){
    // console.log(!gameTypeSelected || (typeof roundsSelected === 'undefined'));
    if (!gameTypeSelected || (typeof roundsSelected === 'undefined')) {
      // alert('choose options to play');
      // console.log(!gameTypeSelected || (typeof roundsSelected === 'undefined'));
          } else {
            startGameBtn.classList.remove("disabled");
            // console.log(!gameTypeSelected || (typeof roundsSelected === 'undefined'));
          }
  }

  
  startGameBtn.addEventListener("click", function () {
    if (!gameTypeSelected || (typeof roundsSelected === 'undefined')) {
alert('choose options to play');
    } else {
      gameName.classList.add("opacity", "darkBlue");
      startGame(gameTypeSelected, roundsSelected, ptsToWin);
      credits.classList.add("darkBlue", "opacity");
      hideOptions();
      readyPane.classList.remove("d-none");
      winner.gamePlay(realPlayer, roundsSelected, ptsToWin, opponent);
      allTheHands.classList.remove("d-none");
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