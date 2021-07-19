"use strict";

let computerOptions = [
    'rock',
    'paper',
    'scissors'
]
function computerPlay() {
    let randomSelect = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomSelect];
}
function playRound(playerSelection) {
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
    } else {
        result = playerLoss;
    }
    return result;
    // using computerPlay function to grab new computer choice with each round
}

let result = '';
// declare result variable to store round results

// possible player results
const playerLoss = "You Lose!";
const playerWin = "You Win!";
const playerTie = "A Tie!";

let playerSelection = ''; //prompt("What will you choose; rock, paper, or scissors?", "Rock"); 
// allow user to input own selection on page load

function game() {
    // Play 5 rounds of rock paper scissors
    // track user wins/losses, keep tally
    // report winner if greater than 2 wins, loser if more than 2 losses
    // do while loop... to get incorporate tie correctly and to reach best of 5? 

    // let wins = 0;
    // let losses = 0;
    // for (let i = 0; i < 5; i++) {
    //     playRound(playerSelection);
    //     console.log(playRound(playerSelection));
    //     if (result === playerWin) {
    //         wins += 1;
    //     } else if (result === playerTie) {
    //         continue;
    //     } else {
    //         losses += 1;
    //     }
    //     console.log(wins);
    //     console.log(losses);
    // }

    // evaluate if the winner won or lost the game
    if (wins > losses) {
        return "Congratulations, you won the game!";
    } else if (wins === losses) {
        return "Tie game! Play again to find out who wins...";
    } else {
        return "Oh no, the computer wins this one!";
    }
}

// results div
const results = document.querySelector('#results');

// default score settings
let wins = 0;
let losses = 0;
// score tally nodes
const winCount = document.querySelector('.wins');
const lossCount = document.querySelector('.losses');
// initializes 0/0 as first score represented before counting any wins/losses
winCount.textContent = wins;
lossCount.textContent = losses;
// named function to reduce repetitive code for button listeners
function playerSelects(e) {
    playerSelection = e.target.id;
    playRound(playerSelection);
    results.textContent = result;

    if (result === playerWin) {
        wins += 1;
    } else if (result === playerTie) {
        return;
    } else {
        losses += 1;
    }
    winCount.textContent = wins;
    lossCount.textContent = losses;
}

// button element nodes
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
// button event listeners
rockBtn.addEventListener('click', playerSelects);
paperBtn.addEventListener('click', playerSelects);
scissorsBtn.addEventListener('click', playerSelects);