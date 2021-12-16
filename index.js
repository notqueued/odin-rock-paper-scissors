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
        console.log("You lost! Paper beats Rock");
        document.getElementsByClassName("resultText")[0].textContent = "You lost! Paper beats Rock";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lost! Scissors beats Paper");
        document.getElementsByClassName("resultText")[0].textContent = "You lost! Scissors beats Paper";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lost! Rock beats Scissors");
        document.getElementsByClassName("resultText")[0].textContent = "You lost! Rock beats Scissors";
        scoreBoard(scoreComputer,"lost");
    }
    else if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        document.getElementsByClassName("resultText")[0].textContent = "It's a draw!";
    } else {
        console.log("You won! " + playerSelection + " beats " + computerSelection);
        document.getElementsByClassName("resultText")[0].textContent = "You won! " + playerSelection + " beats " + computerSelection;
        scoreBoard(scorePlayer,"won");
    }

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
}