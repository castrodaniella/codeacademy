let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.round(Math.random() * 10);
}



function compareGuesses(human, computer, secret) {
    if (human > 9 || human < 0) {
        window.alert("Please enter with a number between 1 - 9.");
        abort;
    } else {
        if (human === secret && computer === secret)  {
            return true;
        } else if (human === secret) {
            return true;
        } else {
            return false;
        }
    }
   
}


function updateScore(winner) {
    if (winner === true) {
        console.log('human');
        console.log(humanScore =+ 1);
    } else {
        console.log('computer');
        console.log(computerScore =+ 1);
    }
}

function advanceRound() {
    currentRoundNumber =+ 1;

}
