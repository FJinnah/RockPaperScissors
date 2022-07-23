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

function getPlayerChoice() {}


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
        if (playerScore == 3) {
            return console.log('Player wins!');
        } else if (computerScore == 3) {
            return console.log('Computer wins :(');
        }
        const computerSelection = getComputerChoice();
        const playerSelection = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}      
}

game();