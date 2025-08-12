function getComputerChoice() {
    let choice;
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        choice = "rock"
    } else if (rand === 1) {
        choice = "paper"
    } else if (rand === 2) {
        choice = "scissors"
    }
    return choice;
}
function getHumanChoice() {
    let hChoice = prompt("Enter: rock or paper or scissors");
    return hChoice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tie!");
        return 0;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock breaks Scissors");
        return 2;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        return 2;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie!");
        return 0;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors cuts Paper");
        return 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors cuts Paper");
        return 2;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tie!");
        return 0;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock breaks Scissors");
        return 1;
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return -1;  // invalid input
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("ROUND " + (i + 1))
        console.log("You: " + humanSelection)
        console.log("Computer: " + computerSelection)
        result = playRound(humanSelection, computerSelection)
        if (result === 1) {
            humanScore++;
        }
        else if (result === 2) {
            computerScore++;
        } else if (result === -1) {
            i--; // repeat this round if invalid input
            continue;
        }
    }
    console.log("SCORE: You - " + humanScore + " v Computer - " + computerScore);
    if (humanScore > computerScore) {
        console.log("YOU WON the game!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOST the game.");
    } else {
        console.log("The game ended in a TIE!");
    }
}
playGame();