let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreElm = document.querySelector("#user-score");
const compScoreElm = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

function generateCompChoice() {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

function drawGame() {
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore += 1;
        userScoreElm.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore += 1;
        compScoreElm.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});