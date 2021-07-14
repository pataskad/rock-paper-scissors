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
    // compare player choice to computer choice
    // Paper > Rock, Scissors > Paper, Rock > Scissors
    // return result (winner or loser)

    console.log(playerSelection);
    console.log(computerSelection);
    // let playerChoiceRegex = /rock|paper|scissors/gi;
    // let playerChoiceResult = playerSelection.match(playerChoiceRegex);
    
    // Next step, set up regex!
    // make all inputs lower case? Or completely insensitive? 
    // (accept any form and translate to standard?)
    
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You win! Rock beats scissors";
    }  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You're a winner! Scissors beats paper";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "Winner, winner! Paper beats rock";
    } else if (playerSelection === computerSelection) {
        return "A tie! Try again";
    } else {
        return "You lose! :(";
    }
    
}

const playerSelection = 'Rock'; //manually input choice (Rock, Paper, or Scissors!)
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));
