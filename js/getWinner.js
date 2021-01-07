let charactersSelected = [];
let rounds = 0;
let points = 0;

let player1pts = 0;
let player2pts = 0;

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");
let roundWinner = document.getElementById("roundWinner");

function getWinner(array, numRounds, thresh, playerName) {
//   console.log(array);
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

    numRounds--;
  }
  p1Points.innerText = player1pts;
  p2Points.innerText = player2pts;

  checkRoundsLeft(numRounds, player1pts, player2pts, thresh, playerName);
}

let roundsToPlay = 0;

function checkRoundsLeft(numRounds, p1Points, p2Points, winningPoints, user) {
  if (
    numRounds > 0 &&
    (p1Points !== winningPoints || p2Points !== winningPoints)
  ) {
    resultPane.classList.remove("d-none");
  } else {
    if (p1Points > p2Points) {
      declareWin.innerText = "Player 1 Wins!";
    } else {
      declareWin.innerText = `${user} Wins!`;
    }

    resultPane.classList.remove("d-none");
    contBtn.classList.add("d-none");
    refreshBtn.classList.remove("d-none");
  }
}

function gamePlay(real, rounds, points, playerName) {
  let selectCharBtn = document.getElementById("selectCharBtn");
  let rockBtn = document.getElementById("rockBtn");
  let paperBtn = document.getElementById("paperBtn");
  let scissorsBtn = document.getElementById("scissorsBtn");
  let lizardBtn = document.getElementById("lizardBtn");
  let spockBtn = document.getElementById("spockBtn");

  let confirmBtn = document.getElementById("confirmBtn");
  let contBtn = document.getElementById("contBtn");

  let character = "";

  selectCharBtn.addEventListener("click", function () {
    readyPane.classList.add("d-none");
    choicePane.classList.remove("d-none");
  });

  //CHARACTER SELECTION
  rockBtn.addEventListener("click", function () {
    character = "rock";
  });
  paperBtn.addEventListener("click", function () {
    character = "paper";
  });
  scissorsBtn.addEventListener("click", function () {
    character = "scissors";
  });
  lizardBtn.addEventListener("click", function () {
    character = "lizard";
  });
  spockBtn.addEventListener("click", function () {
    character = "spock";
  });

  confirmBtn.addEventListener("click", function () {
    if (real) {
      if (!character) {
      } else if (charactersSelected.length === 0) {
        charactersSelected.push(character);

        choicePane.classList.add("d-none");
        readyPane.classList.remove("d-none");
        let pNum = (document.getElementById("pNum").innerText = "2");
      } else {
        charactersSelected.push(character);

        choicePane.classList.add("d-none");
        //then run comparison
        getWinner(charactersSelected, rounds, points, playerName);
      }

      character = "";
    } else {
      let cpuBtn = document.getElementById("cpuBtn");

      if (!character) {
      } else if (charactersSelected.length === 0) {
        charactersSelected.push(character);

        cpuBtn.classList.remove("d-none");
        choicePane.classList.add("d-none");
        confirmBtn.classList.add("d-none");

        cpuBtn.addEventListener("click", function () {
          let AIChoiceURL = "https://csa2020studentapi.azurewebsites.net/rpsls";

          async function getAIChoice(url) {
            let choice = await fetch(url);
            let choice2 = await choice.text();

            character = choice2;
            charactersSelected.push(character);

            choicePane.classList.add("d-none");
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

  contBtn.addEventListener("click", function () {
    resultPane.classList.add("d-none");
    readyPane.classList.remove("d-none");
    pNum.innerText = "1";
    charactersSelected = [];
  });
}

export { getWinner, gamePlay };
