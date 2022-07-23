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
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You win! The score is now Player: ' + ++playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ties + '.';
        } else if (computerSelection === 'paper') {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You lose. The score is now Player: ' + playerScore +
            ', Computer: ' + ++computerScore + ', Ties: ' + ties + '.';
        } else {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. Tie game. The score is now Player: ' + playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ++ties + '.';
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You lose. The score is now Player: ' + playerScore +
            ', Computer: ' + ++computerScore + ', Ties: ' + ties + '.';
        } else if (computerSelection === 'rock') {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You win! The score is now Player: ' + ++playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ties + '.';
        } else {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. Tie game. The score is now Player: ' + playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ++ties + '.';
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You win! The score is now Player: ' + ++playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ties + '.';
        } else if (computerSelection === 'rock') {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. You lose. The score is now Player: ' + playerScore +
            ', Computer: ' + ++computerScore + ', Ties: ' + ties + '.'; 
        } else {
            return 'You selected ' + playerSelection + ' and the computer selected ' + computerSelection + '. Tie game. The score is now Player: ' + playerScore +
            ', Computer: ' + computerScore + ', Ties: ' + ++ties + '.';
        }
        }
    }

function game() {
    for (let i = 0; i < 20; i++) {
        if (playerScore, computerScore === 3) break;
        const computerSelection = getComputerChoice();
        const playerSelection = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}      
}



game();