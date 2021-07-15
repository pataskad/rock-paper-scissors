"use strict";


let computerOptions = [
    'rock',
    'paper',
    'scissors'
]

function computerPlay() {
    // randomly return result from computerOptions array
    // assign random choice to randomSelect variable
    // return randomized selection

    let randomSelect = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomSelect];
}

function playRound(playerSelection) {
    // function plays a single round of rock paper scissors
    // compare player choice to computer choice
    // Paper > Rock, Scissors > Paper, Rock > Scissors
    // return result (winner, loser, or tie)

    let playerChoiceStr = playerSelection.toLowerCase(); 
    // filters playerSelection to lower case allowing case insensitivity

    if (playerChoiceStr === 'rock' && computerPlay() === 'scissors') {
        result = playerWin;
    }  else if (playerChoiceStr === 'scissors' && computerPlay() === 'paper') {
        result = playerWin;
    } else if (playerChoiceStr === 'paper' && computerPlay() === 'rock') {
        result = playerWin;
    } else if (playerChoiceStr === computerPlay()) {
        result = playerTie;
        // count as loss for brevity?
    } else {
        result = playerLoss;
    }

    return result;
    // using computerPlay function to grab new computer choice with each round
}

let result = '';
// declare result variable to store round results

// possible player results
const playerLoss = "You lose! :(";
const playerWin = "You win! Congratulations!";
const playerTie = "A tie! A loss.... for now";

const playerSelection = prompt("What will you choose; rock, paper, or scissors?", "Rock"); 
// allow user to input own selection

function game() {
    // Play 5 rounds of rock paper scissors
    // track user wins/losses, keep tally
    // report winner if greater than 2 wins, loser if more than 2 losses
    // do while loop... to get incorporate tie correctly? 

    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection);
        console.log(playRound(playerSelection));
        if (result === playerWin) {
            wins += 1;
        } else {
            losses += 1;
        }
        console.log(wins);
        console.log(losses);
    }

    // evaluate if the winner won or lost the game
    if (wins > losses) {
        return "Congratulations, you won the game!";
    } else {
        return "Oh no, the computer wins this one!";
    }
}


//console.log(playRound(playerSelection, computerSelection));
