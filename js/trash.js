//ORIGINAL script.js BEFORE CLEANUP

import * as winner from './getWinner.js';

let gameTypeSelected;
let roundsSelected = 0;
let ptsToWin = 0;
let opponent = 'No One';

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
    opponent = "CPU";
  });
  player2Btn.addEventListener("click", function () {
    console.log("Real Human Interaction #covid");
    gameTypeSelected = twoGamePlay;
    realPlayer = true;
    opponent = "Player 2";
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
      winner.gamePlay(realPlayer, roundsSelected, ptsToWin, opponent);
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



//ORIGINAL getwinner.js BEFORE CLEANUP
// import * as mainScript from './script.js';

let charactersSelected = [];
let rounds = 0;
let points = 0;

let player1pts = 0;
let player2pts = 0;

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

//now we can write the funnction to compare the array...
function getWinner(array, numRounds, thresh, playerName) {
  //pull in array
  //compare array[0] and array[1]
  let p1 = array[0];
  let p2 = array[1];

  if (p1 === p2) {
    resultPane.classList.remove("d-none");
    console.log("draw");
    roundWinner.innerText = `Wah wah wahhhh...you both chose" ${p1}. Go again.`;
    //repeat round
  } else {
    //determine winner
    //also decrement number of rounds left to play...
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
    }
    roundWinner.innerText = `${playerName} wins the round! ${p2} beats ${p1}`;

    numRounds--;
  }
  console.log(
    `SCORE: P1: ${player1pts} P2: ${player2pts}, Rounds left: ${numRounds}`
  );
  p1Points.innerText = player1pts;
  p2Points.innerText = player2pts;

console.log(playerName);

  checkRoundsLeft(numRounds, player1pts, player2pts, thresh, playerName);
}

//this script handles rounds of play
let roundsToPlay = 0;

//button click will determine rounds
//this runs after results are displayed...
function checkRoundsLeft(numRounds, p1Points, p2Points, winningPoints, user) {
  console.log(winningPoints);

  if (
    numRounds > 0 &&
    (p1Points !== winningPoints || p2Points !== winningPoints)
  ) {
    console.log(`Another round coming up...${winningPoints} points to win!`);
    resultPane.classList.remove("d-none");
  } else {
    console.log("That's it folks!");

    if (p1Points > p2Points) {
      declareWin.innerText = "Player 1 Wins!";
    } else {
      declareWin.innerText = `${user} Wins!`;
    }

    resultPane.classList.remove("d-none");
    contBtn.classList.add("d-none");
    refreshBtn.classList.remove("d-none");

    //show final winner screen
  }
}

// function checkPoints(){
//     if ()
// }

//===============================

// for rounds left, we have to check both the number of points to win, and rounds played...

// only what's needed // for actual gameplay

function gamePlay(real, rounds, points, playerName) {

    console.log(playerName);
  let selectCharBtn = document.getElementById("selectCharBtn");
  let rockBtn = document.getElementById("rockBtn");
  let paperBtn = document.getElementById("paperBtn");
  let scissorsBtn = document.getElementById("scissorsBtn");
  let lizardBtn = document.getElementById("lizardBtn");
  let spockBtn = document.getElementById("spockBtn");

  let confirmBtn = document.getElementById("confirmBtn");
  // let selectChar2Btn = document.getElementById("selectChar2Btn");
  let contBtn = document.getElementById("contBtn");

  console.log(real);

  let character = "";

  // REMEMBER REFACTOR
  selectCharBtn.addEventListener("click", function () {
    console.log("Choose wisely...");
    //will hide the ready panel and show character choices
    readyPane.classList.add("d-none");
    choicePane.classList.remove("d-none");
  });

  //CHARACTER SELECTION
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

  //this acts fro both 1 and 2, so we need two paths for cpu mode and live
  confirmBtn.addEventListener("click", function () {
    if (real) {
      console.log(`${character} confirmed!`);
      // function that will push choice to array:
      // private function
      if (!character) {
        console.log("Uh oh, choose please.");
      } else if (charactersSelected.length === 0) {
        charactersSelected.push(character);
        console.log(charactersSelected);
        choicePane.classList.add("d-none");
        readyPane.classList.remove("d-none");
        let pNum = (document.getElementById("pNum").innerText = "2");
      } else {
        // console.log('Uh oh, you already chose...');
        charactersSelected.push(character);
        console.log(`time to compare: ${charactersSelected}`);
        choicePane.classList.add("d-none");
        //then run comparison
        getWinner(charactersSelected, rounds, points, playerName);
      }

      character = "";
    } else {
      let cpuBtn = document.getElementById("cpuBtn");

      //handle CPU mode
      console.log(`${character} confirmed!`);
      // function that will push choice to array:
      // private function
      if (!character) {
        console.log("Uh oh, choose please.");
      } else if (charactersSelected.length === 0) {
        charactersSelected.push(character);
        console.log(charactersSelected);
        //   choicePane.classList.add("d-none");
        //   readyPane.classList.remove("d-none");
        //   let pNum = (document.getElementById("pNum").innerText = "2");
        //we need to show the comp ready button...
        cpuBtn.classList.remove("d-none");
        confirmBtn.classList.add("d-none");

        cpuBtn.addEventListener("click", function () {
          //cpu choice api call, maybe handle that earlier?
          let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";

          async function getAIChoice(url) {
            let choice = await fetch(url);
            // console.log(typeof choice);
            let choice2 = await choice.text();
            console.log(`Shhhh...API Choice: ${choice2}`);
            character = choice2;
            charactersSelected.push(character);

            //   charactersSelected.push(character);
            console.log(`time to compare: ${charactersSelected}`);
            choicePane.classList.add("d-none");
            //then run comparison
            getWinner(charactersSelected, rounds, points, playerName);
          }

          getAIChoice(AIChoiceURL);
          cpuBtn.classList.add("d-none");

        });
      } else {
      }

      character = "";
    }
  });
  // selectChar2Btn.addEventListener("click", function () {
  //   console.log("Choose wisely ${playerName}...");
  // });
  contBtn.addEventListener("click", function () {
    console.log("ELMO");
    resultPane.classList.add("d-none");
    readyPane.classList.remove("d-none");
    pNum.innerText = "1";
    console.log(charactersSelected);
    charactersSelected = [];
    console.log(charactersSelected);
  });

  //   let characters = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
}

export { getWinner, gamePlay };
