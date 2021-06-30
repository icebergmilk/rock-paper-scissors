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

function game() {
    let pScore = 0;
    let cScore = 0;

    console.log('Rock, Paper, Scissors! Best out of 5');

    for (let i = 0; i < 5; i++) {
        const pSelection = getPlayerSelection(`Round: ${i + 1}. Enter your selection: `);
        const currentRound = playRound(pSelection, computerPlay());
        console.log(currentRound.result);
        if (currentRound.score === 1) {
            pScore++;
        } else if (currentRound.score === 0) {
            cScore++;
        }
    }

    console.log(`Player score: ${pScore}`);
    console.log(`Computer score: ${cScore}`);
    let result;
    if (pScore > cScore) {
        result = 'You WIN!';
    } else if (cScore > pScore) {
        result = 'You LOSE!';
    } else {
        result = 'It\'s a tie!';
    }
    console.log(result);
}

function capitaliseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getPlayerSelection(promptMessage) {
    const re = /^(rock|paper|scissors)$/i;
    let pSelection = prompt(promptMessage);
    while (!re.test(pSelection)) {
        pSelection = prompt('Invalid selection. Please select rock, paper, or scissors: ');
    }

    return pSelection;
}
