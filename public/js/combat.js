//Makes buttons start the game
const buttons = Array.from(document.querySelectorAll('button'));
//Player health
const playerHP = document.querySelector('.player-health');
//Computer health
const computerHP = document.querySelector('.computer-health');
//Not using
const playerC = document.querySelector('.player-button-choice button');
//Textbox
const overallResult = document.getElementById('TextBox');
//Not using
const computerC = document.querySelector('.computer-button-choice button');
const compButtonF = document.querySelector('.box-right button.computer-fire');
const compButtonW = document.querySelector('.box-right button.computer-water');
const compButtonG = document.querySelector('.box-right button.computer-grass');

const restartID = document.getElementById('restart');

buttons.forEach(button => button.addEventListener('click', playGame));
restartID.addEventListener("click",replayGame)

//Restartbutton


let computerChoice = '';
let playerChoice = '';


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
    const choice = ['Fire', 'Water', 'Grass'];
    return choice[getRandomInt(3)];
}

function selectChoice(e) {
    const className = e.target.className;
    let compC;
    compC = computerPlay();

    // resetSelection();

    // if (computerC.className != '') {
    //     computerC.className = '';
    // }

    // if (playerC.className !== '') {
    //     playerC.className = '';
    // }

    if (compC === 'Fire') {
        computerChoice = 'Fire';
    } else if (compC === 'Water') {
        computerChoice = 'Water';
    } else if (compC === 'Grass') {
        computerChoice = 'Grass';
    }

    if (className === 'choice player-fire') {
        playerChoice = 'Fire';
    } else if (className === 'choice player-water') {
        playerChoice = 'Water';
    } else if (className === 'choice player-grass') {
        playerChoice = 'Grass';
    }

    // playerC.className = className;
}


function playGame(e) {
    if (playerHP.value <= 0 || computerHP.value <= 0) {
        return;
    }

    selectChoice(e);

    if (playerHP.value !== 0 && computerHP.value !== 0) {
        playRound();
    }

    if (computerHP.value === 0) {
        overallResult.textContent = 'You Won!';
    }
    if (playerHP.value === 0) {
        overallResult.textContent = 'You Lost!';
        restartID.classList.remove('restart');

    }
}

function playRound() {

    if (computerChoice === 'Fire') {
        switch (playerChoice) {
            case 'Fire':
                showDrawResult();
                break;
            case 'Water':
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case 'Grass':
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === 'Water') {
        switch (playerChoice) {
            case 'Water':
                showDrawResult();
                break;
            case 'Grass':
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case 'Fire':
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === 'Grass') {
        switch (playerChoice) {
            case 'Grass':
                showDrawResult();
                break;
            case 'Fire':
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case 'Water':
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    }
}

function replayGame() {
    computerChoice = '';
    playerChoice = '';
    overallResult.textContent = '';
    playerHP.value = 100;
    computerHP.value =100;
    


    // resetSelection();

}

function damageHP(HP, damage) {
    HP.value -= damage;
    return HP;
}




function showDrawResult() {
    overallResult.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
    
}

function showWinResult() {
    overallResult.textContent = `You Win! ${playerChoice} beats ${computerChoice}`
    
}

function showLoseResult() {
    overallResult.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    
}