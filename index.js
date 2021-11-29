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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost! Rock beats Scissors";
    }
    else if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else {
        return "You won! " + playerSelection.charAt(0).toUpperCase() + 
        playerSelection.substring(1) + " beats " + computerSelection.charAt(0).toUpperCase() + 
        computerSelection.substring(1);
    }
}

function scoreBoard(points, roundResult) {
    if (roundResult === "won") {
        points[0]++;
    } else if (roundResult === "lost") {
        points[1]++;
    }
    return points;
}

function game() {
    let score = [0,0];
    for(let i = 0; i < 5; i++){
        let smth = computerPlay();
        let player = window.prompt("Choose beetween: rock, paper or scissors");
        let playerLower = player.toLowerCase();
        while (playerLower !== "rock" && playerLower !== "paper" &&
        playerLower !== "scissors") {
            player = window.prompt("Choose beetween: rock, paper or scissors");
        }
        let round = playRound(playerLower, smth.toLowerCase());
        if (round.indexOf("won") > -1){
            score = scoreBoard(score,"won");
        } else if (round.indexOf("lost") >-1) {
            score = scoreBoard(score,"lost");
        }
        console.log(`Round ${i+1}:`);
        console.log(`${playerLower[0].toUpperCase() + playerLower.substring(1)} vs ${smth}`);
        console.log(round);
        console.log(`Player: ${score[0]}`);
        console.log(`Computer: ${score[1]}`);
    }
    if(score[0] > score[1]){
        console.log("Congrats! You won!");
    } else if (score[0] < score[1]) {
        console.log("Too bad. You lost!");
    } else {
        console.log("What a bummer. It's a draw!");
    }
}

game();