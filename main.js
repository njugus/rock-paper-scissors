let playerScore = 0;
let compScore = 0;
const computer_span = document.querySelector(".compyuter-score");
const player_span = document.querySelector(".player-score");
const compChoice = document.getElementById("comp-choice");
const playerChoice = document.getElementById("user-choice");
const statusText = document.querySelector(".status-text");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissors");
const scoreBoard = document.querySelector(".heading-2");

// Function that picks a random choice for the computer
function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const value = Math.floor(Math.random() * 3);
    if (choices[value] === "rock") {
        compChoice.innerHTML = "✊";
    } else if (choices[value] === "paper") {
        compChoice.innerHTML = "✋";
    } else {
        compChoice.innerHTML = "✌";
    }
    return choices[value];
}

// Function to handle win 
function win() {
    playerScore += 1;
    player_span.innerHTML = `Player ${playerScore}`;
    computer_span.innerHTML = `Computer ${compScore}`;
    statusText.innerHTML = "PLAYER WINS";
}

// Function to handle lose 
function lose() {
    compScore += 1;
    player_span.innerHTML = `Player ${playerScore}`;
    computer_span.innerHTML = `Computer ${compScore}`;
    statusText.innerHTML = "COMPUTER WINS";
}

// Function to handle draw 
function draw() {
    statusText.innerHTML = "DRAW";
}

// Function to play the game
function game(userChoice) {
    const compValue = getCompChoice();
    switch (userChoice + compValue) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win();
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
}

// Main function to handle button clicks
function main() {
    rockChoice.addEventListener("click", function () {
        playerChoice.innerHTML = "✊";
        game("rock");
    });

    paperChoice.addEventListener("click", function () {
        playerChoice.innerHTML = "✋";
        game("paper");
    });

    scissorChoice.addEventListener("click", function () {
        playerChoice.innerHTML = "✌";
        game("scissors");
    });
}

// Start the game
main();
