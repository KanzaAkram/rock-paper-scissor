let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  //rock,paper,scissor
  const options = ["rock", "paper", "scissor"];

  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw.Play again";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScoreSpan.innerText = userScore;
        // console.log("User wins");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "blue";
    } else {
        computerScore++;
        computerScoreSpan.innerText = computerScore;
        // console.log("Computer wins");
        msg.innerText = `Computer Wins! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
//   console.log("user choice = ", userChoice);

  //generate computer choice ->modular way of programming

  const computerChoice = generateComputerChoice();
//   console.log("computer choice = ", computerChoice);

  //compare the choices
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (computerChoice === "scissor") {
        userWin = true;
      }
      if (computerChoice === "paper") {
        userWin = false;
      }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            userWin = true;
        }
        if (computerChoice === "scissor") {
            userWin = false;
        }
    }
    else{
        if (computerChoice === "paper") {
            userWin = true;
        }
        if (computerChoice === "rock") {
            userWin = false;
        }

    }
    showWinner(userWin,userChoice,computerChoice);
}

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
