# ROCK PAPER SCISSORS

###### A PROJECT FROM THE ODIN PROJECT
---
In this project, it is a recreation of the game rock, paper, scissors in JavaScript. This project is entirely played in the console, and it is a player (the user) against a bot. The game is best of 5 rounds, and whoever has the higher score wins.

It is first set up by creating the HTML file and JavaScript file, and linking the HTML to the JavaScript file externally.

This project uses 4 functions for the game to happen. 
    
    - computerchoice(): which uses the Math.rand() and Math.floor() to get the computer decision, where it would return "rock", "paper",
    or "scissor" based on that decision

    - getHumanChoice(): This function would prompt the user to choose between "rock", "paper", or "scissors". It would then check if 
    the user chose correctly, if not, it 
    would reprompt the user until the user picks one of the three choices.

    - PlayRound(): This function would imitate a round being played. It would call computerChoice() and playerChoice() to get both 
    choices, and then it would compare the choices to find the outcome and see if it is a tie, or whether one side wins or loses. 
    This function is nested inside playGame(), so that only playGame() can access it.

    - PlayGame(): This function would simulate a game where it is best of 5 rounds. It has a for loop that loops for 5 rounds,
    where it tracks the  user's choice and keeps track of the score. After the 5 rounds, it would compare humanScore and 
    computerScore and decide who wins based on the score. 

