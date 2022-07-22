function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice <= 1) {
        return 'rock';
    } else if (choice <=2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let getPlayerChoice = prompt ('Please type in either rock, paper, or scissors.').toLowerCase();

if (getPlayerChoice == 'rock') {
    getPlayerChoice = 'rock';
} else if (getPlayerChoice == 'scissors') {
    getPlayerChoice = 'scissors';
} else if (getPlayerChoice == 'paper') {
    getPlayerChoice = 'paper';
} else {
    alert('Choice not recognized. Please refresh the page.')
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'Rock wins!';
        } else if (computerSelection === 'paper') {
            return 'Paper wins!';
        } else {
            return 'Tie game!';
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Scissors wins!';
        } else if (computerSelection === 'rock') {
            return 'Paper wins!';
        } else {
            return 'Tie game!';
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'Scissors wins!';
        } else if (computerSelection === 'rock') {
            return 'Rock wins!';
        } else {
            return 'Tie game!';
        }
        }
}

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection); {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'Rock wins!';
        } else if (computerSelection === 'paper') {
            return 'Paper wins!';
        } else {
            return 'Tie game!';
        }
        }
    }
    console.log(playRound(playerSelection, computerSelection))
}
}


   


const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice();
console.log(game());