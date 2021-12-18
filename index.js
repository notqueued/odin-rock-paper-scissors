function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;    
    }
}

function scoreBoard(points, roundResult) {
    if (roundResult === "won") {
        points++;
        document.getElementsByClassName("scorePlayer")[0].textContent = String(points);
    } else if (roundResult === "lost") {
        points++;
        document.getElementsByClassName("scoreComputer")[0].textContent = String(points);
    }
}

function playRound(playerSelection) {
    let scorePlayer = updatePlayer();
    let scoreComputer = updateComputer();
    let computerSelection = computerPlay();
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        document.getElementsByClassName("resultText")[0].textContent = "You lost";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        document.getElementsByClassName("resultText")[0].textContent = "You lost";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        document.getElementsByClassName("resultText")[0].textContent = "You lost";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === computerSelection) {
        document.getElementsByClassName("resultText")[0].textContent = "Draw";
    } else {
        document.getElementsByClassName("resultText")[0].textContent = "You won";
        scoreBoard(scorePlayer,"won");
    }

    imageResultRound(playerSelection, computerSelection);
    scorePlayer = updatePlayer();
    scoreComputer = updateComputer();
    console.log(scorePlayer);
    console.log(scoreComputer);
    
    if(scorePlayer === 5 || scoreComputer === 5) {
        endOfGame(scorePlayer, scoreComputer);
    }
}

function updatePlayer() {
    return parseInt(document.getElementsByClassName("scorePlayer")[0].textContent);
}

function updateComputer() {
    return parseInt(document.getElementsByClassName("scoreComputer")[0].textContent);
}

function imageResultRound(playerSelection,computerSelection) {
    if (document.querySelector('.holderResultPlayer')){
        document.querySelector('.holderResultPlayer').remove();
    }
    if (document.querySelector('.holderResultComputer')) {
        document.querySelector('.holderResultComputer').remove();
    }
    const pText = document.querySelector('.resultText');
    const div = pText.parentNode;
    const resultPlayer = document.createElement('div');
    resultPlayer.classList.add('holderResultPlayer');
    const imageResultPlayer = document.createElement('img');
    imageResultPlayer.classList.add('imageResultPlayer');
    const srcPlayer = "./images/" + playerSelection.toLowerCase() + ".png";
    imageResultPlayer.setAttribute("src", srcPlayer);
    resultPlayer.appendChild(imageResultPlayer);
    const resultComputer = document.createElement('div');
    resultComputer.classList.add('holderResultComputer');
    const imageResultComputer = document.createElement('img');
    imageResultComputer.classList.add('imageResultComputer');
    const srcComputer = "./images/" + computerSelection.toLowerCase() + ".png";
    imageResultComputer.setAttribute("src", srcComputer);
    resultComputer.appendChild(imageResultComputer);
    div.insertBefore(resultPlayer, pText);
    div.appendChild(resultComputer);
}

function endOfGame(scorePlayer, scoreComputer){
    if (scorePlayer > scoreComputer) {
        document.getElementsByClassName("resultText")[0].textContent = "You won!";
    } else {
        document.getElementsByClassName("resultText")[0].textContent = "You lost!";
    }
    let selectionBtn = document.getElementsByClassName("selection-btn");
    for (let i = 0; i < selectionBtn.length; i++){
        selectionBtn[i].setAttribute("disabled", "");
    }
    const div = document.querySelector('.result');
    const playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    playAgain.textContent = "Play again";
    playAgain.addEventListener('click', () => { newGame();});
    div.appendChild(playAgain);
}

function newGame() {
    let selectionBtn = document.getElementsByClassName("selection-btn");
    for (let i = 0; i < selectionBtn.length; i++){
        selectionBtn[i].removeAttribute("disabled");
    }
    document.querySelector('.scorePlayer').textContent = "0";
    document.querySelector('.scoreComputer').textContent = "0";
    document.querySelector('.resultText').textContent = "";
    document.querySelector('.playAgain').remove();
    document.querySelector('.holderResultPlayer').remove();
    document.querySelector('.holderResultComputer').remove();
}