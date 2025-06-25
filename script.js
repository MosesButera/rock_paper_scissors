
let randomNum = Math.floor(Math.random() * 3); //Output should be limited to only 0,1,or 2 and nothing else.
 
function getComputerChoice(randomNum) {
    if (randomNum == 0){
        return "ROCK";
    } else if (randomNum == 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

console.log(getComputerChoice(randomNum));

let choice = prompt("Enter either ROCK, PAPER, or SCISSORS to play");

function getHumanChoice (choice){
    if (choice == "ROCK") return "ROCK";
    else if (choice == "PAPER") return "PAPER";
    else return "SCISSORS";
}

console.log(getHumanChoice(choice));