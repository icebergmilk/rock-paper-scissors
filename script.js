function computerPlay() {
    const ITEMS = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);
    return ITEMS[rand];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
    let result;
    let winner;
    let loser;

    if (p === c) {
        return {
            score: -1,
            result: 'It\'s a tie!'
        };
    }

    if ((p === 'rock' && c === 'scissors') ||
        (p === 'scissors' && c === 'paper') ||
        (p === 'paper' && c === 'rock')) {
        result = 'You win!';
        winner = p;
        loser = c;
    } else {
        result = 'You lose!';
        winner = c;
        loser = p;
    }

    const score = (winner === p) ? 1 : 0;
    return {
        score,
        result: `${result} ${capitaliseFirstLetter(winner)} beats ${capitaliseFirstLetter(loser)}`
    };
}

function capitaliseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function printWinner(player, computer) {
    let result;
    if (player > computer) {
        result = 'You WIN!';
    } else if (computer > player) {
        result = 'You LOSE!';
    } else {
        result = 'It\'s a tie!';
    }

    const winner = document.createElement('h2');
    winner.textContent = result;
    const resultsDiv = document.querySelector('.results');
    resultsDiv.appendChild(winner);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const pScore = document.querySelector('#player');
    pScore.textContent = playerScore;
    const cScore = document.querySelector('#computer');
    cScore.textContent = computerScore;
    const resultsDiv = document.querySelector('.results');
    const winner = document.querySelector('.results h2');
    resultsDiv.removeChild(winner);
    gameEnd = false;
}

let playerScore = 0;
let computerScore = 0;
let gameEnd = false;

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameEnd) {
            resetGame();
        }

        const currentRound = playRound(button.textContent, computerPlay());
        const result = document.querySelector('.currentResult');
        result.textContent = currentRound.result;

        if (currentRound.score === 1) {
            playerScore++;
        } else if (currentRound.score === 0) {
            computerScore++;
        }

        const pScore = document.querySelector('#player');
        pScore.textContent = playerScore;
        const cScore = document.querySelector('#computer');
        cScore.textContent = computerScore;

        if (playerScore >= 5 || computerScore >= 5) {
            printWinner(playerScore, computerScore);
            gameEnd = true;
        }
    })
});
