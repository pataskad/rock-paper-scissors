"use strict";

function computerPlay() {
    // randomly return number between 1 and 3
    // assign 'Rock', 'Paper' and 'Scissors' to corresponding 1-3
    // return randomized selection
    let randomSelect = Math.floor(Math.random() * (4 - 1) + 1);

    if (randomSelect === 1) {
        return 'Rock';
    } else if (randomSelect === 2) {
        return 'Paper';
    } else if (randomSelect === 3) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // function plays a single round of RPS
    // make player input case insensitive (any combination of rock, paper, scissors.  Everything else seen as null)
    let playerSelectionRegex = playerSelection.match(/rock|paper|scissors/i);
    console.log(playerSelectionRegex);
    // compare player choice to computer choice
    // return result (winner or loser)

    //console.log(computerSelection);
}

const playerSelection = 'rock'; //manually input choice (Rock, Paper, or Scissors!)
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));