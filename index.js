let t = 0
let w = 0
let l = 0

function getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerSelection() {

    let playerPrompt = prompt("What is will your input be?")
    playerPrompt = playerPrompt.toLowerCase()
    return playerPrompt

}

function round(getComputerSelection, getPlayerSelection) {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerSelection()
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                t++
                return quote = 'You both selected rock. The game is a tie.';
            case 'paper':
                l++
                return quote = 'Paper beats rock. You lose.';
            case 'scissors':
                w++
                return quote = 'Rock beats scissors. You win.';
        }
    }
    if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
                w++
                return quote = 'Paper beats rock. You win.';
            case 'paper':
                t++
                return quote = 'You both selected paper. The game is a tie.';
            case 'scissors':
                l++
                return quote = 'Scissors beats paper. You lose.';
        }
    }
    if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                l++
                return quote = 'Rock beats scissors. You win.';
            case 'paper':
                w++
                return quote = 'Scissors beats paper. You win.';
            case 'scissors':
                t++
                return quote = 'You both selected scissors. The game is a tie.';
        }
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        round(getComputerSelection, getPlayerSelection);
        alert(`ROUND ${i} | ${quote}\nPLAYER: ${w} | COMPUTER: ${l}`)
    }
    if (w < l) {
        alert(`On the fifth and final round, it appears that the computer beat you by ${l - w} rounds.. You have lost the game.`)
    }
    else if (w > l) {
        alert(`On the fifth and final round, you have destroyed the computer with a ${w - l} round lead. Congratulations sir.`)
    }
    else {
        alert(`Well this doesn't happen too often. Y'all mfs tied`)
    }
}

game();