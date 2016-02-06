////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}

var getComputerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;

    if (playerMove == computerMove) {
        winner = "tie";
    } 
    else if (playerMove == "rock") { 
        if (computerMove == "scissors") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove == "paper") {
        if(computerMove == "rock") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove == "scissors") {
        if (computerMove == "paper") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else {
        console.log("Something has gone wrong, please refresh.")
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var round = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (playerWins < 5 && computerWins < 5) {
        //var playerMove = randomPlay(); // for random play
        var playerMove = getPlayerMove();
        var computerMove = randomPlay();
        var winner = getWinner(playerMove, computerMove);
        if(winner == "tie") {
            round++;
            console.warn("Tie!")
            console.log("player chose " + playerMove);
            console.log("computer chose " + computerMove);
        }
        if (winner == "player") {
            round++;
            playerWins++;
            console.log("Round " + round + " Player chose " + playerMove + " and computer chose " + computerMove +". Everyone knows that " + playerMove + " beats " + computerMove);
            console.log("player score: " + playerWins);
            console.log("computer score: " + computerWins);
        }
        if (winner == "computer") {
            round++;
            computerWins++;
            console.log("Round " + round + " Computer chose " + computerMove + " and player chose " + playerMove +". Everyone knows that " + computerMove + " beats " + playerMove);
            console.log("computer score: " + computerWins);
            console.log("player score: " + playerWins);
        }
    }

    if(playerWins === 5) {
        console.warn("player wins on round " + round);
    }
    if(computerWins === 5) {
        console.warn("computer wins on round " + round);   
    }

    return [playerWins, computerWins];
}