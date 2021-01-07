import * as cpuGame from './script.js';

let loadPage = () => {
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

  function gameTypeSelected() {}
  console.log(gameTypeSelected());
  let roundsSelected = 0;

  aiPlayerBtn.addEventListener("click", function () {
    console.log("CPU Challenege Accepted!");
    gameTypeSelected = cpuGame.cpuGamePlay; //set game type
  });
  player2Btn.addEventListener("click", function () {
    console.log("Real Human Interaction #covid");
    gameTypeSelected = twoGamePlay;
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

  console.log(gameTypeSelected() === undefined);
  console.log(gameTypeSelected() === undefined || roundsSelected === 0);

  startGameBtn.addEventListener("click", function () {
    console.log("Get Ready!");
    if (gameTypeSelected() === undefined && roundsSelected === 0) {
      // startGame(gameTypeSelected, roundsSelected);
      console.log("complete game options");
    } else {
      cpuGame.startGame(gameTypeSelected, roundsSelected);
      hideOptions();
    }
  });
  refreshBtn.addEventListener("click", function () {
    showOptions();
  });

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

  confirmBtn.addEventListener("click", function () {
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
      //then run comparison
    }

    function pushChar(character) {
      //grab character
    }
  });
  // selectChar2Btn.addEventListener("click", function () {
  //   console.log("Choose wisely Player 2...");
  // });
  contBtn.addEventListener("click", function () {
    console.log("ELMO");
  });

  let characters = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
};

export { loadPage };
