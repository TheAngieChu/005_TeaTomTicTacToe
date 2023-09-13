let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];     /* 9 slots==== */
let gameOver = false;  /* If gameOver = true, the game has ended */

function makeMove(cellIndex) {
    if (gameState[cellIndex] === '' && !gameOver) {
        gameState[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].classList.add(currentPlayer.toLowerCase());

        if (checkWin()) {
            document.querySelector('.message').innerText = `${currentPlayer} WINS!`;
            gameOver = true;
        } else if (gameState.indexOf('') === -1) {
            document.querySelector('.message').innerText = "TIE GAME!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.querySelector('.message').innerText = `It's ${currentPlayer}'s Turn!!`;
        }
    }
}

/* ALL GAME WIN COMBOS */
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return true;
        }
    }

    return false;
}
