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
}
function checkWinner() {
    let finalScore = '';
    if (wins == 5) {
        resetGame();
        finalResult.style.backgroundColor = 'Green';
        finalScore = "Congratulations, you won the match!";
    } else if (losses == 5) {
        resetGame(); // resets score to 0-0
        finalResult.style.backgroundColor = 'Red';
        finalScore = "You lost the match! Maybe next time...";
    }
    finalResult.textContent = finalScore;
}
function resetGame() {
    wins = 0;
    losses = 0;
    winCount.textContent = wins;
    lossCount.textContent = losses;
    finalResult.textContent = '';
    results.textContent = '';
}
// named function to reduce repetitive code for button listeners
function playerSelects(e) {
    playerSelection = e.target.id; // this works because the id is equal to the input parameter needed
    playRound(playerSelection);

    if (result === playerWin) {
        wins += 1;
    } else if (result === playerTie) {
        return;
    } else {
        losses += 1;
    }

    results.textContent = result;
    winCount.textContent = wins;
    lossCount.textContent = losses;

    checkWinner(); // helper function to evaluate winner/loser
}

let result = ''; // declare result variable to store round results
let playerSelection = ''; // initialize player selection

const playerLoss = "You Lose!";
const playerWin = "You Win!";
const playerTie = "A Tie!";

let wins = 0; // default scores
let losses = 0;

const winCount = document.querySelector('.wins'); // score tally nodes
const lossCount = document.querySelector('.losses');
// initializes 0/0 as first score represented before counting any wins/losses
winCount.textContent = wins;
lossCount.textContent = losses;

const results = document.querySelector('#results'); // results div
const finalResult = document.querySelector('#final-result'); //final-result node

// button element nodes
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset-all'); // reset!
// button event listeners
rockBtn.addEventListener('click', playerSelects);
paperBtn.addEventListener('click', playerSelects);
scissorsBtn.addEventListener('click', playerSelects);
resetBtn.addEventListener('click', resetGame); // reset!