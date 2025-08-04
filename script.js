function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3);

    if(decision == 0)
        return "rock";
    else if(decision == 1) return "paper";
    else return "scissor";
}

function getHumanChoice() {
    let userInput = prompt("Choose 'rock', 'paper' or 'scissor'");

    while(userInput.toLowerCase() != "rock" && userInput.toLowerCase() != "paper" && userInput.toLowerCase() != "scissor"){
        userInput = prompt("invalid choice, please Choose 'rock', 'paper' or 'scissor'");
    } 

    return userInput.toLowerCase();
}

function playgame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, ComputerChoice) {
        console.log("you chose: " + humanChoice);
        console.log("computer chose: " + ComputerChoice);

        if(humanChoice == ComputerChoice) {
            return "It's a tied!";
        }

        if((humanChoice == "rock" && ComputerChoice == "scissor") || (humanChoice == "paper" && ComputerChoice == "rock") || (humanChoice == "scissor" && ComputerChoice == "paper")) {
            humanScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Lose!";
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const ComputerChoice = getComputerChoice();
        const result = playRound(humanChoice, ComputerChoice);
        console.log(result);
        console.log("score: You - " + humanScore + " \nComputer - " + computerScore);
        console.log(" ");
    }

    if(humanScore > computerScore){
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE");
    } else {
        console.log("IT'S A TIED!");
    }
}

playgame();