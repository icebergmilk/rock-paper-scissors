function computerPlay() {
    const ITEMS = ['Rock', 'Paper', 'Scissors'];
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
        return 'It\'s a tie!';
    }

    if ((p === 'rock' && c === 'scissors') ||
        (p === 'scissors' && c === 'paper') ||
        (p === 'paper' && c === 'rock')) {
        result = 'You WIN!';
        winner = p;
        loser = c;
    } else {
        result = 'You LOSE!';
        winner = c;
        loser = p;
    }

    return `${result} ${capitaliseFirstLetter(winner)} beats ${capitaliseFirstLetter(loser)}`;
}

function capitaliseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
