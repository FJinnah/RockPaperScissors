let playerScore = 0;
let computerScore = 0;
let ties = 0;
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


//Allows the computer to randomly choose between rock, paper, and scissors.
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

//Allows the player to choose between rock, paper, and scissors. They are prompted in the game() function.
function getPlayerChoice() {}

//Checks the winner and prints a message to the console with information about choices, winner, and score.
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
//Combines everything into a proper game. The loop is run and ends when either the player or computer reaches 3 (best out of 5).
function game() {
    for (let i = 0; i < 20; i++) {
        if (playerScore == 3) {
            return console.log('Player wins!game();');
        } else if (computerScore == 3) {
            return console.log('Computer wins :(');
        }
        const computerSelection = getComputerChoice();
        // const playerSelection = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}      
}

//UI additions
const rockChoice = document.querySelector('#rockChoice');
rockChoice.addEventListener('click', () => {
    console.log('rock');
});

const paperChoice = document.querySelector('#paperChoice');
paperChoice.addEventListener('click', () => {
    console.log('paper');
});

const scissorsChoice = document.querySelector('#scissorsChoice');
scissorsChoice.addEventListener('click', () => {
    console.log('scissors');
});
//Runs the function in the console.
// game();