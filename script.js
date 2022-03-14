// Event handlers
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

const handleTurn = function () {
    result = playTurn(this.textContent, computerPlay());
    resultDiv = document.querySelector(".results-container");
    resultDiv.textContent = result;

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    if (playerScore === 5) {
        resultDiv.textContent = "You Won the Game!";
        buttons.forEach((btn) => btn.classList.add("hidden"));
    } else if (computerScore === 5) {
        resultDiv.textContent = "You lost the Game!";
        buttons.forEach((btn) => btn.classList.add("hidden"));
    }
};

const restartGame = function () {
    buttons.forEach((btn) => btn.classList.remove("hidden"));
    resultDiv.textContent = "Make a Choice";
    computerScore = 0;
    playerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
};

// Declarations
const buttons = document.querySelectorAll(".btn");
const restartBtn = document.querySelector(".restart");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");

// initialize
let playerScore = 0;
let computerScore = 0;

buttons.forEach((btn) => btn.addEventListener("click", handleTurn));
restartBtn.addEventListener("click", restartGame);
