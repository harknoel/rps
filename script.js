let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock") {
        playerSelection = 0;
    } else if(playerSelection == "paper") {
        playerSelection = 1;
    } else if(playerSelection == "scissor") {
        playerSelection = 2;
    }

    if(playerSelection == computerSelection) { // tie
       return "It's a tie! " + playerSelection + " " + computerSelection;
    } else if(playerSelection == 0 && computerSelection == 2) { // rock crushes scissors
        playerScore++;
        return "Player wins (rock > scissor)!"
    } else if(playerSelection == 1 && computerSelection == 0) { // paper covers rock
        playerScore++;
        return "Player wins (paper > rock)!"
    } else if(playerSelection == 2 && computerSelection == 1) { // scissor cut paper
        playerScore++;
        return "Player wins (scissor > paper)!"
    } else {
        computerScore++;
        return "Computer wins! " + playerSelection + " " + computerSelection;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("What is your choice?");
        playRound(playerSelection, computerSelection);
    }
    alert("Player: " + playerScore + " | " + "Computer: " + computerScore);
    playerScore = 0;
    computerScore = 0;
}

game();

