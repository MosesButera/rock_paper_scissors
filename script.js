// 1. GAME STATE
let humanScore = 0;
let computerScore = 0;

// 2. CORE GAME LOGIC

function getComputerChoice() {
    const computerOutputDiv = document.querySelector(".computerChoiceOutput");
    const randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let choice;

    if (randomNum === 0) {
        choice = "ROCK";
    } else if (randomNum === 1) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }

    computerOutputDiv.textContent = `Computer Choice: ${choice}`;
    return choice;
};

function playRound(humanChoice) {
    const roundResultDiv = document.querySelector(".round-result");
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return roundResultDiv.textContent = "It's a Draw!";
    }

    if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        return roundResultDiv.textContent = "You Win!";
    } else {
        return roundResultDiv.textContent = "You Lose!";
    }
}