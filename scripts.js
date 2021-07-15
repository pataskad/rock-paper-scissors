"use strict";

function computerPlay() {
    // randomly return number between 1 and 3
    // assign 'Rock', 'Paper' and 'Scissors' to corresponding 1-3
    // return randomized selection
    let randomSelect = Math.floor(Math.random() * (4 - 1) + 1);

    if (randomSelect === 1) {
        return 'rock';
    } else if (randomSelect === 2) {
        return 'paper';
    } else if (randomSelect === 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // function plays a single round of RPS
    // make player input case insensitive (any combination of rock, paper, scissors.  Everything else seen as null)
    // compare player choice to computer choice
    // Paper > Rock, Scissors > Paper, Rock > Scissors
    // return result (winner, loser, or tie)

    let playerChoiceStr = playerSelection.toLowerCase();
    console.log(playerChoiceStr); // player selection after filtering to lower case
    console.log(computerSelection);

    if (playerChoiceStr === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors";
    }  else if (playerChoiceStr === 'scissors' && computerSelection === 'paper') {
        return "You're a winner! Scissors cuts paper";
    } else if (playerChoiceStr === 'paper' && computerSelection === 'rock') {
        return "Winner, winner! Paper beats rock";
    } else if (playerChoiceStr === computerSelection) {
        return "A tie! Try again";
    } else {
        return "You lose! :(";
    }
    
}

const playerSelection = 'sCisSors'; //manually input choice (Rock, Paper, or Scissors!)
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));
