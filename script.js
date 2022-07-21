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

function playRound (playerSelection, computerSelection) {
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


const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection));