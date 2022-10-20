//Makes buttons start the game
const updateStr = require('./updateStrength');
const getCharData = require('./getCharacterData');
const getMonsterData = require('./getMonsterData');

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
const nextLevel=  document.getElementById('nextup');

buttons.forEach(button => button.addEventListener('click', playGame));
restartID.addEventListener("click",replayGame)
nextLevel.addEventListener("click",dialoguePage)

//Restartbutton


let computerChoice = '';
let playerChoice = '';


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
    const choice = ["Sword", "Shield", "Arrows"];
    return choice[getRandomInt(3)];
}

function selectChoice(e) {
    const className = e.target.className;
    let compC;
    compC = computerPlay();


    if (compC === "Sword") {
        computerChoice = "Sword";
    } else if (compC === "Shield") {
        computerChoice = "Shield";
    } else if (compC === "Arrows") {
        computerChoice = "Arrows";
    }

    if (className === 'choice player-fire') {
        playerChoice = "Sword";
    } else if (className === 'choice player-water') {
        playerChoice = "Shield";
    } else if (className === 'choice player-grass') {
        playerChoice = "Arrows";
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
        nextLevel.classList.remove('hide')

    }
    if (playerHP.value === 0) {
        overallResult.textContent = 'You Lost!';
        restartID.classList.remove('hide');

    }
}

function playRound() {

    if (computerChoice === "Sword") {
        switch (playerChoice) {
            case "Sword":
                showDrawResult();
                break;
            case "Shield":
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case "Arrows":
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === "Shield") {
        switch (playerChoice) {
            case "Shield":
                showDrawResult();
                break;
            case "Arrows":
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case "Sword":
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === "Arrows") {
        switch (playerChoice) {
            case "Arrows":
                showDrawResult();
                break;
            case "Sword":
                showWinResult();
                damageHP(computerHP, 20);
                break;
            case "Shield":
                showLoseResult();
                damageHP(playerHP, 20);
                break;
        }
    }
}


//Restarts the game
function replayGame() {
    computerChoice = '';
    playerChoice = '';
    overallResult.textContent = '';
    playerHP.value = 100;
    computerHP.value =100;
    nextLevel.classList.add('hide')

}

//Does the damage
function damageHP(HP, damage) {
    HP.value -= damage;
    return HP;
}

//Gets us to next dialogue page
function dialoguePage(){
    // window.location.replace("/dialoguepage");
    window.location.replace("/dialoguepage.html")
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