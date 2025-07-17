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

// 3. SCORE DISPLAY & GAME OVER

function updateScoreDisplay(result){
    const humanScoreDiv = document.querySelector(".player-score");
    const computerScoreDiv = document.querySelector(".computer-score");

    if (result == "You Win!"){
        humanScore = humanScore + 1
        console.log("humanScore", humanScore);
        console.log("computerScore", computerScore);
        computerScoreDiv.textContent = computerScore;
        return humanScoreDiv.textContent = humanScore; 
    } else if (result == "You Lose!"){
        computerScore = computerScore + 1
        console.log("humanScore", humanScore);
        console.log("computerScore", computerScore);
        humanScoreDiv.textContent = humanScore;
        return computerScoreDiv.textContent = computerScore;
    } 
}

function checkGameOver(){
    const finalResultDiv = document.querySelector(".result");

    if (humanScore === 5 || computerScore === 5) {
        removeHumanChoice(); // Disable buttons

        if (humanScore > computerScore){
            finalResultDiv.textContent = `YOU WIN! Game Over! Final Score — Human: ${humanScore}, Computer: ${computerScore}. Refresh to play again!`;
        }else {
            finalResultDiv.textContent = `YOU LOSE!Game Over! Final Score — Human: ${humanScore}, Computer: ${computerScore}. Refresh to play again!`;
        }
    }
}