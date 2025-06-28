

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


































