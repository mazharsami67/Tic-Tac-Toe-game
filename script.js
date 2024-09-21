let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

const disableBtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBtns = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (win) => {
    msg.innerText = `Congratulations, winner is ${win}`
    msgContainer.classList.remove("hide");
    disableBtns();
}

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO) {
            box.style.color = "blue";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val!= "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};


newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);