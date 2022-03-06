const computerPlay = function () {
  const selections = ["Rock", "Paper", "Scissors"];
  const rndNum = Math.floor(Math.random() * 3);

  return selections[rndNum];
};

const playTurn = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    }
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    }
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    }
  }
  return "Please enter valid inputs!";
};

const game = function () {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = playTurn(prompt("Select"), computerPlay());

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    console.log(result);
    console.log(playerScore, computerScore);
  }
  return playerScore > computerScore
    ? "Player Wins!"
    : computerScore > playerScore
    ? "Computer Wins!"
    : "Tie!";
};
