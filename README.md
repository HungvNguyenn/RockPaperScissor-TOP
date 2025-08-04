# ROCK PAPER SCISSORS

###### A PROJECT FROM THE ODIN PROJECT
---
in this project it is a recreation of the game rock paper scissor in javascript. This project is entirely played in the cosole and it is a player (the user) against a bot. The game is best of 5 rounds and whoever has the higher score win.

It is first set up by creating the html file and javascript file, and linking the html to the javascript file externally.

This project uses 4 function for the game to happen. 
    
    -computerchoice(): which uses the Math.rand() and Math.floor() to get the computer decision where it would return "rock", "paper", or "scissor" based on that decision

    -getHumanChoice(): This function would prompt the user to choose between "rock", "paper", or "scissor". It would then check if the user choose correctly, if not it would reprompt the user until the user pick one of three choice.

    -PlayRound(): This function would imitate a round being played, it would call computerChoice() and playerChoice() to get both choice, and then it would compare the choice to find the outcome and see if it is a tie, or whether one side win or lose. This function is nested inside playGame(), so that only playGame() can access it.

    -PlayGame(): This function would simulate a game where it is best of 5 rounds. It has a for loop that loop for 5 rounds where it track user choice and keep track of the score. After the 5 rounds it would compare humanScore and computerScore and decide who win base on score. 

