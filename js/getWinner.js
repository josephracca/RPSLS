let charactersSelected = [];
let rounds = 0;
let points = 0;

let player1pts;
let player2pts;

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

let cpuBtn = document.getElementById("cpuBtn");

function getWinner(array, numRounds, thresh, playerName) {
  let p1 = array[0];
  let p2 = array[1];

  if (p1 === p2) {
    resultPane.classList.remove("d-none");
    roundWinner.innerText = `Wah wah wahhhh...you both chose" ${p1}. Go again.`;
  } else {
    if (
      (p1 === "rock" && (p2 === "scissors" || p2 === "lizard")) ||
      (p1 === "paper" && (p2 === "rock" || p2 === "spock")) ||
      (p1 === "scissors" && (p2 === "paper" || p2 === "lizard")) ||
      (p1 === "lizard" && (p2 === "paper" || p2 === "spock")) ||
      (p1 === "spock" && (p2 === "rock" || p2 === "scissors"))
    ) {
      player1pts++;
      roundWinner.innerText = `Player 1 wins the round! ${p1} beats ${p2}`;
    } else {
      player2pts++;
      roundWinner.innerText = `${playerName} wins the round! ${p2} beats ${p1}`;
    }
    roundsLeft--;
    // return numRounds;
  }
  p1Points.innerText = player1pts;
  p2Points.innerText = player2pts;
  checkRoundsLeft(numRounds, player1pts, player2pts, thresh, playerName);
}

let roundsToPlay = 0;

function checkRoundsLeft(numRoundsIn, p1Points, p2Points, winningPoints, user) {
  if (
    p1Points === winningPoints ||
    p2Points === winningPoints ||
    numRoundsIn === 0
  ) {
    //ends game and shows results
    if (p1Points > p2Points) {
      declareWin.innerText = "Player 1 Wins it ALL!";
    } else {
      declareWin.innerText = `${user} Wins it ALL!`;
    }
    resultPane.classList.remove("d-none");
    //hide continue button
    contBtn.classList.add("d-none");
    //show return to menu
    refreshBtn.classList.remove("d-none");
  } else {
    resultPane.classList.remove("d-none");
  }
}

let roundsLeft;
let cpuChoice;

let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";

function gamePlay(real, rounds, points, playerName) {
  player1pts = 0;
  player2pts = 0;

  async function getAIChoice(url) {
    let choice = await fetch(url);
    let choice2 = await choice.text();
    cpuChoice = choice2;
  }

  getAIChoice(AIChoiceURL);

  roundsLeft = rounds;

  let confirmBtn = document.getElementById("confirmBtn");
  let contBtn = document.getElementById("contBtn");

  let character;

  function pushName() {
    charactersSelected.push(character);
    choicePane.classList.add("d-none");
  }

  let selectCharBtn = document
    .getElementById("selectCharBtn")
    .addEventListener("click", function () {
      readyPane.classList.add("d-none");
      choicePane.classList.remove("d-none");
    });

  //CHARACTER SELECTION
  let rockBtn = document
    .getElementById("rockBtn")
    .addEventListener("click", function () {
      character = "rock";
    });
  let paperBtn = document
    .getElementById("paperBtn")
    .addEventListener("click", function () {
      character = "paper";
    });
  let scissorsBtn = document
    .getElementById("scissorsBtn")
    .addEventListener("click", function () {
      character = "scissors";
    });
  let lizardBtn = document
    .getElementById("lizardBtn")
    .addEventListener("click", function () {
      character = "lizard";
    });
  let spockBtn = document
    .getElementById("spockBtn")
    .addEventListener("click", function () {
      character = "spock";
    });

  confirmBtn.addEventListener("click", function () {
    if (real) {
      if (!character) {
        alert("select a character first!");
      } else if (charactersSelected.length === 0) {
        pushName();

        readyPane.classList.remove("d-none");
        let pNum = (document.getElementById("pNum").innerText = "2");
      } else {
        pushName();
        //then run comparison
        getWinner(charactersSelected, roundsLeft, points, playerName);
      }

      character = "";
    } else {
      if (!character) {
        alert("select a character first!");
      } else if (charactersSelected.length === 0) {
        pushName();

        cpuBtn.classList.remove("d-none");
        confirmBtn.classList.add("d-none");

        character = cpuChoice.toLowerCase();
        // character = 'rock'; to test single variable
        pushName();
        confirmBtn.classList.remove("d-none");
        getWinner(charactersSelected, roundsLeft, points, playerName);
        cpuBtn.classList.add("d-none");
        charactersSelected = [];

        // cpuBtn.addEventListener("click", function () {}); SHOULD YOU WANT TO USE A SEPARATE BUTTON <------
      }
      character = "";
    }
  });

  contBtn.addEventListener("click", function () {
    resultPane.classList.add("d-none");
    readyPane.classList.remove("d-none");
    pNum.innerText = "1";
    charactersSelected = [];
  });
}

export { getWinner, gamePlay };
