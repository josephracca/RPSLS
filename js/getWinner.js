import * as wiggle from "./wiggle.js";

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
    roundWinner.innerHTML = `Wah wah wahhhh...you both chose <b>"${p1.toUpperCase()}"</b>. Go again.`;
  } else {
    if (
      (p1 === "rock" && (p2 === "scissors" || p2 === "lizard")) ||
      (p1 === "paper" && (p2 === "rock" || p2 === "spock")) ||
      (p1 === "scissors" && (p2 === "paper" || p2 === "lizard")) ||
      (p1 === "lizard" && (p2 === "paper" || p2 === "spock")) ||
      (p1 === "spock" && (p2 === "rock" || p2 === "scissors"))
    ) {
      player1pts++;
      roundWinner.innerHTML = `<b>Player 1</b> wins the round!<br> <b>"${p1.toUpperCase()}"</b> beats <b>"${p2.toUpperCase()}"</b>`;
    } else {
      player2pts++;
      roundWinner.innerHTML = `<b>${playerName}</b> wins the round!<br> <b>"${p2.toUpperCase()}"</b> beats <b>"${p1.toUpperCase()}"</b>`;
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

    bodyOdyOdy.classList.add("explosion");

    resultPane.classList.remove("d-none");
    //hide continue button
    contBtn.classList.add("d-none");
    //show return to menu
    refreshBtn.classList.remove("d-none");
    fadeAll();
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

  // getAIChoice(AIChoiceURL);

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
      getAIChoice(AIChoiceURL);
      readyPane.classList.add("d-none");
      choicePane.classList.remove("d-none");
      // rockBtn.classList.remove("disabled");
      confirmBtn.classList.add("d-none");
      removeBounceIn();
      stopAll();
      //disable and turn opacity down

      //remove slide from classlist
      function removeBounceIn() {
        rockBtn.classList.remove("bounceIn");
        paperBtn.classList.remove("bounceIn");
        scissorsBtn.classList.remove("bounceIn");
        lizardBtn.classList.remove("bounceIn");
        spockBtn.classList.remove("bounceIn");
        rockBtn2.classList.remove("bounceIn");
        paperBtn2.classList.remove("bounceIn");
        scissorsBtn2.classList.remove("bounceIn");
        lizardBtn2.classList.remove("bounceIn");
        spockBtn2.classList.remove("bounceIn");
      }
    });

  //CHARACTER SELECTION
  let choice = document.getElementById("choice");

  let rockBtn = document.getElementById("rockBtn");

  function stopAll() {
    rockBtn.classList.remove("wiggle");
    paperBtn.classList.remove("wiggle");
    scissorsBtn.classList.remove("wiggle");
    lizardBtn.classList.remove("wiggle");
    spockBtn.classList.remove("wiggle");
    rockBtn2.classList.remove("wiggle");
    paperBtn2.classList.remove("wiggle");
    scissorsBtn2.classList.remove("wiggle");
    lizardBtn2.classList.remove("wiggle");
    spockBtn2.classList.remove("wiggle");
  }

  rockBtn.addEventListener("click", function () {
    // stopAll();
    character = "rock";
    wiggle.wiggleMe(character, rockBtn);
  });
  let paperBtn = document.getElementById("paperBtn");

  paperBtn.addEventListener("click", function () {
    character = "paper";
    wiggle.wiggleMe(character, paperBtn);
  });
  let scissorsBtn = document.getElementById("scissorsBtn");

  scissorsBtn.addEventListener("click", function () {
    character = "scissors";
    wiggle.wiggleMe(character, scissorsBtn);
  });
  let lizardBtn = document.getElementById("lizardBtn");

  lizardBtn.addEventListener("click", function () {
    character = "lizard";
    wiggle.wiggleMe(character, lizardBtn);
  });
  let spockBtn = document.getElementById("spockBtn");

  spockBtn.addEventListener("click", function () {
    character = "spock";
    wiggle.wiggleMe(character, spockBtn);
  });

  //Right Side
  let rockBtn2 = document.getElementById("rockBtn2");

  rockBtn2.addEventListener("click", function () {
    character = "rock";
    wiggle.wiggleMe(character, rockBtn2);
  });
  let paperBtn2 = document.getElementById("paperBtn2");

  paperBtn2.addEventListener("click", function () {
    character = "paper";
    wiggle.wiggleMe(character, paperBtn2);
  });
  let scissorsBtn2 = document.getElementById("scissorsBtn2");

  scissorsBtn2.addEventListener("click", function () {
    character = "scissors";
    wiggle.wiggleMe(character, scissorsBtn2);
  });
  let lizardBtn2 = document.getElementById("lizardBtn2");

  lizardBtn2.addEventListener("click", function () {
    character = "lizard";
    wiggle.wiggleMe(character, lizardBtn2);
  });
  let spockBtn2 = document.getElementById("spockBtn2");

  spockBtn2.addEventListener("click", function () {
    character = "spock";
    wiggle.wiggleMe(character, spockBtn2);
  });

  confirmBtn.addEventListener("click", function () {
    stopAll();
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

        // cpuBtn.classList.remove("d-none");
        confirmBtn.classList.add("d-none");

        character = cpuChoice.toLowerCase();
        // character = 'rock'; to test single variable
        pushName();
        confirmBtn.classList.remove("d-none");
        getWinner(charactersSelected, roundsLeft, points, playerName);
        // cpuBtn.classList.add("d-none");
        charactersSelected = [];

        // cpuBtn.addEventListener("click", function () {}); SHOULD YOU WANT TO USE A SEPARATE BUTTON <------
      }
      character = "";
    }
    choice.innerText = "";
  });

  contBtn.addEventListener("click", function () {
    resultPane.classList.add("d-none");
    readyPane.classList.remove("d-none");
    pNum.innerText = "1";
    charactersSelected = [];
    stopAll();
  });
}

// function fadeAll() {
//   rockBtn.classList.add("fadeOut");
//   paperBtn.classList.add("fadeOut");
//   scissorsBtn.classList.add("fadeOut");
//   lizardBtn.classList.add("fadeOut");
//   spockBtn.classList.add("fadeOut");
//   rockBtn2.classList.add("fadeOut");
//   paperBtn2.classList.add("fadeOut");
//   scissorsBtn2.classList.add("fadeOut");
//   lizardBtn2.classList.add("fadeOut");
//   spockBtn2.classList.add("fadeOut");
// }

export { getWinner, gamePlay };
