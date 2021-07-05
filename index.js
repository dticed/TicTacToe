const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return { getSign }
}

const gameBoard = () => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        board[index] = sign;
    }

    const getField = (index) => {
        return board[index];
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }

    return { reset, setField, getField }
}

const checkWinner = () => {
    const winsArray = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
}

const play = () => {

}

const jogadas = [];
var last = jogadas[jogadas.length - 1];
var defaultPlay = "X";

const statusElement = document.querySelector("#status")
const fieldElement = document.querySelectorAll(".field")
const restartElement = document.querySelector("#restart")
const defaultPlayElement = document.querySelector("#default-play")

defaultPlayElement.addEventListener("click", function () {
    if (defaultPlay === "X") {
        defaultPlayElement.innerHTML = "O"
        defaultPlay = "O"
    } else {
        defaultPlayElement.innerHTML = "X"
        defaultPlay = "X"
    }
})

restartElement.addEventListener("click", function () {
    statusElement.innerHTML = "Click to Start"
    fieldElement.innerHTML = ""
})

fieldElement.forEach(element => {
    element.addEventListener('click', function () {
        if (last === undefined) {
            element.innerHTML = defaultPlay;
            jogadas.push(defaultPlay);
            defaultPlayElement.disabled = true;
            if (defaultPlay === "X") {
                statusElement.innerHTML = "O's turn";
            } else {
                statusElement.innerHTML = "X's turn";
            }
            last = jogadas[jogadas.length - 1];
            console.log(last);
            console.log(jogadas);
        } else if (last === "X") {
            element.innerHTML = "O";
            jogadas.push("O");
            last = jogadas[jogadas.length - 1];
            statusElement.innerHTML = "X's turn";
        } else if (last === "O") {
            element.innerHTML = "X";
            jogadas.push("X");
            last = jogadas[jogadas.length - 1];
            statusElement.innerHTML = "O's turn";
        }
    })
});


