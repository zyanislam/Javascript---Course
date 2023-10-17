let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        win: 0,
        lose: 0,
        draw: 0
    }
}
updateScore();


function playGame(playerMove) {
    const compMove = pickCompMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (compMove === 'Rock') {
            result = 'It\'s a Draw!';
        } else if (compMove === 'Paper') {
            result = 'Sorry, You Lose!';
        } else if (compMove === 'Scissors') {
            result = 'Congrats, You Win!';
        }
    } else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'Congrats, You Win!';
        } else if (compMove === 'Paper') {
            result = 'It\'s a Draw!';
        } else if (compMove === 'Scissors') {
            result = 'Sorry, You Lose!';
        }
    } else if (playerMove === 'Scissors') {
        if (compMove === 'Rock') {
            result = 'Sorry, You Lose!';
        } else if (compMove === 'Paper') {
            result = 'Congrats, You Win!';
        } else if (compMove === 'Scissors') {
            result = 'It\'s a Draw!';
        }
    }

    if (result === 'Congrats, You Win!') {
        score.win++;
    } else if (result === 'Sorry, You Lose!') {
        score.lose++;
    } else if (result === 'It\'s a Draw!') {
        score.draw++;
    }


    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    showMoves(playerMove, compMove);
    showResult(result);

    // alert(`Your move was ${playerMove}! Player 2 chose ${compMove}.\n${result}\nWins: ${score.win} Loses:${score.lose} Draws:${score.draw}`);
}


function updateScore() {
    document.querySelector('.scoreText')
        .innerHTML = `Wins: ${score.win} Loses:${score.lose} Draws:${score.draw}`;
}


function showMoves(playerMove, compMove) {
    document.querySelector('.movesMade')
        .innerHTML = `Your chose <img class="imagebox" src="images/${playerMove}.png"> <img class="imagebox" src="images/${compMove}.png"> Comp chose`;
}


function showResult(result) {
    document.querySelector('.resultView')
        .innerHTML = `${result}`;
}


function pickCompMove() {
    const rNumber = Math.round(Math.random() * 10);
    let compMove = '';

    if (rNumber <= 3) {
        compMove = 'Rock';
    } else if (rNumber > 3 && rNumber <= 6) {
        compMove = 'Paper';
    } else {
        compMove = 'Scissors';
    }
    return compMove;
}