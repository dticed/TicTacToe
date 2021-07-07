const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return { getSign };
}

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        board[index] = sign;
    }

    const getField = (index) => {
        if (index > board.length) {
            return;
        }
        return board[index];
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }

    return { setField, getField, reset }
})();

const displayController = (() => {
    const statusElement = document.querySelector("#status")
    const fieldElement = document.querySelectorAll(".field")
    const restartElement = document.querySelector("#restart")
    const playingElement = document.querySelector("#playing")
    const elementId = document.getElementById('#data-index')
    const boardGameElement = document.querySelector('#board')

    fieldElement.forEach(element => {
        element.addEventListener('click', function () {
            if(gameController.getRound() >= 8) {
                console.log("meuzovo")
                boardGameElement.disabled = true;
            }
            console.log(element.getAttribute('data-index'));
            gameController.play(element.getAttribute('data-index'));
            updateStatus(gameController.getRound())
            changePlayer();
            updateGameBoard();
        })
    })

    function changePlayer() {
        if (playingElement.innerHTML === "X") {
            playingElement.innerHTML = "O"
        } else {
            playingElement.innerHTML = "X"
        }
    }

    function updateStatus(round) {
        statusElement.innerHTML = `Round ${round}/9`
    }


    restartElement.addEventListener('click', function () {
    for (let i = 0; i < fieldElement.length; i++) {
        gameBoard.setField(i, "");
        playingElement.innerHTML = "X"
        gameController.resetGame();
    }
    updateGameBoard();
})

const updateGameBoard = () => {
    for (let i = 0; i < fieldElement.length; i++) {
        fieldElement[i].innerHTML = gameBoard.getField(i);
    }
};

updateGameBoard()

})();

const gameController = (() => {
    const playerX = Player('X')
    const playerO = Player('O');
    let round = 0;

    function play(index) {
        if (round % 2 === 0 && gameBoard.getField(index) === "") {
            gameBoard.setField(index, playerX.getSign());
            round += 1;
            return round;
        } else if (round % 2 === 1 && gameBoard.getField(index) === "") {
            gameBoard.setField(index, playerO.getSign())
            round += 1;
            return round;
        }
    };

    const getRound = () => {
        return round;
    }

    const resetGame = () => {
        round = 0;
    }

    const checkWinner = () => {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    };

    return { play, resetGame, getRound };
})();




