let playerScore = 0;
let computerScore = 0;
let ties = 0;
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

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
            return 'You selected rock and the computer selected scissors. You win!';
        } else if (computerSelection === 'paper') {
            return 'You selected rock and the computer selected paper. You lose.';
        } else {
            return 'You selected rock and the computer also selected rock. Tie game.';
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You selected paper and the computer selected scissors. You lose.';
        } else if (computerSelection === 'rock') {
            return 'You selected paper and the computer selected rock. You win!';
        } else {
            return 'You selected paper and the computer also selected paper. Tie game.';
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You selected scissors and the computer selected paper. You win!';
        } else if (computerSelection === 'rock') {
            return 'You selected scissors and the computer selected rock. You lose.';
        } else {
            return 'You selected scissors and the computer also selected scissors. Tie game.';
        }
        }
    }

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}      
}



game();