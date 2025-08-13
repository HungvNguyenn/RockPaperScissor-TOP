function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3);

    if(decision == 0) {
        return "rock";
    }
    else if(decision == 1) { 
        return "paper";
    }
    else {
        return "scissor";
    }
}

//no longer needed because we arent prompting user anymore and instead using buttons

// function getHumanChoice() {
//     let userInput = prompt("Choose 'rock', 'paper' or 'scissor'");

//     while(userInput.toLowerCase() != "rock" && userInput.toLowerCase() != "paper" && userInput.toLowerCase() != "scissor"){
//         userInput = prompt("invalid choice, please Choose 'rock', 'paper' or 'scissor'");
//     } 

//     return userInput.toLowerCase();
// }

function playgame() {
    let humanScore = 0;
    let computerScore = 0;

    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");    
    const winnerdiv = document.getElementById("winner");

    function updateScore() {
        scoreDiv.textContent = `Score:You - ${humanScore}  Computer - ${computerScore}`;
    }

    function playRound(humanChoice, ComputerChoice) {
        let resultText = "You chose: " + humanChoice + "<br>Computer chose: " + ComputerChoice

        if(humanChoice == ComputerChoice) {
            resultText += "<br>It's a tied!";
        }

        if((humanChoice == "rock" && ComputerChoice == "scissor") || (humanChoice == "paper" && ComputerChoice == "rock") || (humanChoice == "scissor" && ComputerChoice == "paper")) {
            humanScore++;
            resultText += "<br>You Win!";
        } else {
            computerScore++;
            resultText += "<br>You Lose!";
        }

        resultsDiv.innerHTML = resultText;
        updateScore();

        if(humanScore === 5 || computerScore === 5) {
            announceWinner();
        }

    }

    function announceWinner() {
        if(humanScore > computerScore) {
            winnerdiv.textContent = "YOU WIN!!";
        } else {
            winnerdiv.textContent = "YOU LOSE!";
        }

        document.querySelectorAll("button").forEach(btn => btn.disabled= true);
    }

    //event listener
    document.getElementById("rock").addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    });

    document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    });

}

playgame();