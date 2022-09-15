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

//Increments the player score
function playerWin() {
    let playerTestScore = document.querySelector('#playerScore');
    let number1 = playerTestScore.innerText;
    number1++;
    playerTestScore.innerText = number1;
    playerScore++;

    if (playerScore >= 5) {
        resetGame();
    }
}

//Increments the computer score
function computerWin() {
    let computerTestScore = document.querySelector('#computerScore');
    let number2 = computerTestScore.innerText;
    number2++;
    computerTestScore.innerText = number2;
    computerScore++;

    if (computerScore >= 5) {
        resetGame();
    }
}

//Increments the tie score
function tieWin() {
    let tiesTestScore = document.querySelector('#tiesScore');
    let number3 = tiesTestScore.innerText;
    number3++;
    tiesTestScore.innerText = number3;
    ties++;
}


//Allows the player to choose between rock, paper, and scissors. They are prompted in the game() function.
function getPlayerChoice() {}

//Checks the winner and prints a message to the console with information about choices, winner, and score.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerWin();
         } else if (computerSelection === 'paper') {
             computerWin();
        } else {
            tieWin();
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerWin();
        } else if (computerSelection === 'rock') {
            playerWin();
        } else {
            tieWin();
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerWin();
        } else if (computerSelection === 'rock') {
            computerWin();
        } else {
            tieWin();
        }
        }
    }

function resetGame() {
    if (playerScore >= 5) {
        alert('You win!');
        location.reload();
    } else if (computerScore >= 5) {
        alert ('You lose.');
        location.reload();
    }
}
//UI additions
const rockChoice = document.querySelector('#rockChoice');
rockChoice.addEventListener('click', () => {
    const rockResult = playRound('rock', getComputerChoice());
    const scoreOne = document.querySelector('#score');
});

const paperChoice = document.querySelector('#paperChoice');
paperChoice.addEventListener('click', () => {
    const paperResult = playRound('paper', getComputerChoice());
    const scoreOne = document.querySelector('#score');
});

const scissorsChoice = document.querySelector('#scissorsChoice');
scissorsChoice.addEventListener('click', () => {score
    const scissorsResult = playRound('scissors', getComputerChoice());
    const scoreOne = document.querySelector('#score');
});

// function fullGame() {
    
// }


// End Game Function: Add .disabled for each button


// //Runs the function in the console.
// game();