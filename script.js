

let computer;
let result;

function getHumanChoice (){
    let PlayerChoice = prompt("Enter either ROCK, PAPER, or SCISSORS to play");
    let uppercaseChoice = PlayerChoice.toUpperCase(); //This will account for difference in capitalization of user input

    if (uppercaseChoice === "ROCK") return uppercaseChoice = "ROCK";
    else if (uppercaseChoice === "PAPER") return uppercaseChoice = "PAPER";
    else if (uppercaseChoice === "SCISSORS")return uppercaseChoice = "SCISSORS"; //Add condition for scissors
    else if (uppercaseChoice === null ) return uppercaseChoice = "User canceled the prompt.";
    else return uppercaseChoice = "Re-enter either ROCK, PAPER, or SCISSORS";   //Add condition for anything else
    
}

console.log(`Human choice is: ${getHumanChoice()}`);


function getComputerChoice() {
    let randomNum;
    randomNum = Math.floor(Math.random() * 3); //Output should be limited to only 0,1,or 2 and nothing else.
 
    if (randomNum = 0){
        return computer = "ROCK";
    } else if (randomNum = 1){
        return computer = "PAPER";
    } else if (randomNum = 3){
        return computer = "SCISSORS";
    }
}

console.log(`Computer choice is: ${getComputerChoice()}`);

// let humanScore = 0;
// let computerScore = 0;

function playRound(){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    // getHumanChoice();
    // getComputerChoice();

    if (humanChoice == computerChoice){
        return result = "Its a Draw!";
    } 
    else if (computerChoice == "ROCK"){
        return (humanChoice == "PAPER") ? result = "You Win!" : "You Lose!"
    }
    else if (computerChoice == "PAPER"){
        return (humanChoice == "SCISSORS") ? result = "You Win!" : "You Lose!"
    }
    else if (computerChoice == "SCISSORS"){
        return (humanChoice == "ROCK") ? result = "You Win!" : "You Lose!"
    }

    //    return "You: " + humanChoice + " " + "Computer: " + computerChoice; 
   
}

// console.log(getHumanChoice());
// console.log(getComputerChoice ());
console.log(`Test round result is: ${playRound()}`);

































