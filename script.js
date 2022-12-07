const computerMoveText = document.querySelector(".computer-move")
const playerMoveText = document.querySelector(".player-move")
const computerScoreText = document.querySelector(".computer-score");
const playerScoreText = document.querySelector(".player-score");
const resultText = document.querySelector(".result");
const winnerText = document.querySelector(".winner");
const buttons = document.querySelectorAll(".playerChoice");
let playerScore = 0;
let computerScore = 0;

//Buttons for each player move
buttons.forEach(button => 
    button.addEventListener("click", () => {
        let playerSelection = button.textContent;
        let computerSelection = getComputerChoice();
        computerMoveText.textContent = computerSelection;
        playerMoveText.textContent = button.textContent;
        resultText.textContent = playRound(computerSelection, playerSelection);
        computerScoreText.textContent = `Computer's Score: ${computerScore}`;
        playerScoreText.textContent = `Player's Score: ${playerScore}`;
        winnerText.textContent = checkWinner();
    }));

//Computer chooses its move
function getComputerChoice() {
    let random = ["ROCK", "PAPER", "SCISSORS"];
    return random[Math.floor(Math.random() * random.length)];
}

//Play a round of the rps game
function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie!";

    } else if (computerSelection == "ROCK") {
        if (playerSelection == "PAPER") {
            playerScore++;
            return "Paper beats rock, you win!";
        } else if (playerSelection == "SCISSORS") {
            computerScore++;
            return "Rock beats scissors, you lose!";
        }

    } else if (computerSelection == "PAPER") {
        if (playerSelection == "ROCK") {
            computerScore++;
            return "Paper beats rock, you lose!";
        } else if (playerSelection == "SCISSORS") {
            playerScore++;
            return "Scissors beat paper, you win!";
        }

    } else if (computerSelection == "SCISSORS") {
        if (playerSelection == "ROCK") {
            playerScore++;
            return "Rock beats scissors, you win!";
        } else if (playerSelection == "PAPER") {
            computerScore++;
            return "Scissors beat paper, you lose!";
        }
    }
}
//Check for a winner and reset the game
function checkWinner() {
    if(playerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        return "Congratulations! You won 5 rounds!";

    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        return "Aww, the computer won 5 rounds! You lost!";
    }
}