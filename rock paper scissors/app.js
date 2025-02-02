let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resultDiv = document.getElementById("result");


rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
    disableButtons();

    const computerChoice = generateComputerChoice();
    document.getElementById("compInput").textContent = `Computer chose ${generateComputerChoice()}`;

    const result = determineWinner(userChoice, computerChoice);

    displayResult(result);

    setTimeout(enableButtons, 2000);
}

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random()*3);

    switch (randomNumber) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!"
    } else {
        return "Computer wins!"
    }
}

function displayResult(result) {
    resultDiv.textContent = result;
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}