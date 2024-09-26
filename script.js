// Game global variables
let humanScore = 0;
let computerScore = 0;
let round = 0;
// Selection of DOM
const rock_btn = document.querySelector("#Rock");
const paper_btn = document.querySelector("#Paper");
const scissor_btn = document.querySelector("#Scissor");
const screen1 = document.querySelector('.Screen');

const outcomeLine = document.createElement("p");
outcomeLine.textContent = `Lets Play Rock Paper Scissor!!`;
outcomeLine.style.textAlign = "center";
outcomeLine.style.fontWeight = 900;
screen1.appendChild(outcomeLine);

const greetLine = document.createElement("p");
greetLine.textContent = `Round: ${round}`;
screen1.appendChild(greetLine);

const hmnScrLine = document.createElement("p");
hmnScrLine.textContent = `Human Score: ${humanScore}`;
screen1.appendChild(hmnScrLine);

const cmpScrLine = document.createElement("p");
cmpScrLine.textContent = `Computer Score: ${computerScore}`;
screen1.appendChild(cmpScrLine);




rock_btn.addEventListener("click", function (e) {
    
    round++;
    playRound("rock");
    console.log("round = " + round);
});

paper_btn.addEventListener("click", function (e) {
    round++;
    playRound("paper");
    
});

scissor_btn.addEventListener("click", function (e) {
    round++;
    playRound("scissor");
});







console.log("Hello!!\n Lets Play a Game!!");
function getComputerChoice() {
    let num = Math.random() * 3;
    if (num <= 1) {
        return "Rock";
    }
    else if (num <= 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

// function getHumanChoice(){
//     let selected = prompt("Enter rock, paper,or scissor: "); 
//     return selected;
// }

function playRound(humanChoice) {
    // const humanChoice = getHumanChoice().toUpperCase();
    humanChoice = humanChoice.toUpperCase();
    const computerChoice = getComputerChoice().toUpperCase();
    if (humanChoice == computerChoice) {
        console.log("Match Draw!! Play another round");
        outcomeLine.textContent = 'Match Draw!! Play another round';
    }
    else if ((humanChoice == "ROCK" && computerChoice == "PAPER") ||
        (humanChoice == "PAPER" && computerChoice == "SCISSOR") ||
        (humanChoice == "SCISSOR" && computerChoice == "ROCK")) {
        computerScore++;
        console.log("You Lose!!" + computerChoice + " beats " + humanChoice);
        outcomeLine.textContent = `You Lose!! ${computerChoice} beats ${humanChoice}`;
    }
    else {
        humanScore++;
        console.log("You Won!! " + humanChoice + " beats " + computerChoice);
        outcomeLine.textContent = `You Won!! ${humanChoice} beats ${computerChoice}`;
    }
    greetLine.textContent = `Round: ${round}`;
    hmnScrLine.textContent = `Human Score: ${humanScore}`;
    cmpScrLine.textContent = `Computer Score: ${computerScore}`;


    // if (humanChoice == "ROCK")
    // {
    //     if(computerChoice == "PAPER")
    //     {
    //         computerScore++;
    //         console.log("You Lose!! Paper beats Rock");
    //     }
    //     else{
    //         humanScore++
    //         console.log("You Won!! " + humanChoice + " beats " + computerChoice);
    //     }
    // }
    // else if(humanChoice == "PAPER")
    // {
    //     if(computerChoice == "SCISSOR")
    //     {
    //         computerScore++;
    //         console.log("You Lose!!" + computerChoice + " beats " + humanChoice);

    //     }
    //     else{
    //         humanScore++
    //         console.log("You Won!! " + humanChoice + " beats " + computerChoice);
    //     }

    // }
    // else{
    //     if(computerChoice == "ROCK")
    //         {
    //             computerScore++;
    //             console.log("You Lose!!" + computerChoice + " beats " + humanChoice);

    //         }
    //         else{
    //             humanScore++
    //             console.log("You Won!! " + humanChoice + " beats " + computerChoice);
    //         }
    // }
    return;

}

function playGame() {


    console.log("Lets strat the game of Rock, Paper, Scissor");
    // playRound();
    // playRound();
    // playRound();
    // playRound();
    // playRound();

    console.log(" Your Score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

playGame();