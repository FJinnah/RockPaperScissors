let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        return 'rock';
    } else if (choice <=2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    getPlayerChoice = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
    if (getPlayerChoice == 'rock') {
        return 'rock';
    } else if (getPlayerChoice == 'scissors') {
        return 'scissors';
    } else if (getPlayerChoice == 'paper') {
        return 'paper';
    } else {
        alert('Choice not recognized. Please refresh the page.')
    }
    }


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return playerWinMessage;
        } else if (computerSelection === 'paper') {
            return computerWinMessage;
        } else {
            return tieMessage;
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return computerWinMessage;
        } else if (computerSelection === 'rock') {
            return playerWinMessage;
        } else {
            return tieMessage;
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return playerWinMessage;
        } else if (computerSelection === 'rock') {
            return computerWinMessage;
        } else {
            return tieMessage;
        }
        }
}

const playerWinMessage = 'Player wins this round!';
const computerWinMessage = 'Computer wins this round!';
const tieMessage = 'This round is a tie';

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult == playerWinMessage) {
        console.log('1 point for player!');
    } else if (roundResult == computerWinMessage) {
        console.log ('1 point for computer!');
    } else {
        console.log('Tie!');
    }
    }
}      


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(game());