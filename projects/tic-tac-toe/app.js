const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGame = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const main = document.querySelector("main");
const gameForm = document.querySelector("#game-form");
const container = document.querySelector("#container");
const userContainer = document.querySelector(".user-container");

let player1Turn = true;

const winningPatterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let moves = 9;
let flag = false;

// users name
let player1;
let player2;

gameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    player1 = document.querySelector("#player1").value;
    player2 = document.querySelector("#player2").value;

    if (player1 != null && player2 != null) {
        userContainer.classList.add("hide");
        container.classList.remove("hide");
    }
    
}, false);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player1Turn) {
            box.style.color = "Red";
            box.innerText = "O";
            player1Turn = false;
        } else {
            box.style.color = "Green";
            box.innerText = "X";
            player1Turn = true;
        }
        box.disabled = true;

        checkWinner();

        if (flag === false && moves === 0) {
            showDraw();
        }
    });
});

function showDraw() {
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
}

function showWinner(winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    //main.className = "hide";
}

function checkWinner() {
    --moves;
    for (let pattern of winningPatterns) {
        let post1Val = boxes[pattern[0]].innerHTML;
        let post2Val = boxes[pattern[1]].innerHTML;
        let post3Val = boxes[pattern[2]].innerHTML;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                boxes[pattern[0]].classList.add("win-box");
                boxes[pattern[1]].classList.add("win-box");
                boxes[pattern[2]].classList.add("win-box");
                if (post1Val === "O") {
                    showWinner(player1);
                } else {
                    showWinner(player2);
                }
                flag = true;
            }
        }
        
    }
}

function resetGame() {
    moves = 9;
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("win-box");
    })
}

newGame.addEventListener("click", resetGame, true);

resetBtn.addEventListener("click", resetGame, true);