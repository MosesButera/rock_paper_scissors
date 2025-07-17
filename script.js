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

// 4. EVENT HANDLING

function handleButtonClick(event){
    const playerOutputDiv = document.querySelector(".playerChoiceOutput");
    
    const clickedButton = event.target;   //Get the button/element 
    // textContent the player clicked on and use event.target to 
    // find out which button was pressed 

    const playerSelection = clickedButton.textContent;  //and save 
    // its text content in playerSelection variable. 

    playerOutputDiv.textContent = `Player Choice: ${playerSelection}`;
    const result = playRound(playerSelection);    // Play one round of the game
    //Call playRound() and pass in the player’s choice. Store the result
    //  ("You Win!", "You Lose!", or "It's a Draw!"). 

    console.log("Game result:", result);     //Show the result 
    // in the browser console. Example: "Game result: You Win!"

    const latestScore = updateScoreDisplay(result);  //Update the score on 
    // the screen. Call updateScoreDisplay() and give it the result. It will 
    // add 1 to the winner’s score and display it
    console.log("Latest Score:", latestScore);

    checkGameOver(); //Check if either player has reached 5 points
}

function getHumanChoice (){
    const buttons = document.querySelectorAll(".my-button");
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

function removeHumanChoice(){
    const buttons = document.querySelectorAll(".my-button");
    buttons.forEach(button => {
        button.removeEventListener("click", handleButtonClick);
    });
}