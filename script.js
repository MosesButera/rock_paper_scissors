
let randomNum = Math.floor(Math.random() * 3);
 
function getComputerChoice(randomNum) {
    if (randomNum == 0){
        return "ROCK";
    } else if (randomNum == 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
