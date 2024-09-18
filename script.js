console.log("Hello!!\n Lets Play a Game!!");
function getComputerChoice(){
    let num = Math.random() * 3;
    if(num<= 1)
    {
        return "Rock";
    }
    else if(num<=2)
    {
        return "Paper";
    }
    else{
        return "Scissor";
    }
    return "Rock";
}

function getHumanChoice(){
    let selected = prompt("Enter rock, paper,or scissor: "); 
    return selected;
}

function playRound(){
    const humanChoice = getHumanChoice().toUpperCase();
    const computerChoice = getComputerChoice().toUpperCase();
    if(humanChoice == computerChoice)
    {
        console.log("Match Draw!! Play another round");
    }
    else if((humanChoice == "ROCK" && computerChoice == "PAPER") ||
        (humanChoice =="PAPER" && computerChoice =="SCISSOR") ||
        (humanChoice == "SCISSOR" && computerChoice == "ROCK"))
    {
        computerScore++;
        console.log("You Lose!!" + computerChoice + " beats " + humanChoice);
    }
    else{
        humanScore++;
        console.log("You Won!! " + humanChoice + " beats " + computerChoice);
    }
    


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

function playGame(){
    

    console.log("Lets strat the game of Rock, Paper, Scissor");
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log(" Your Score: " + humanScore);
    console.log("Computer score: " + computerScore);
}
let humanScore = 0;
let computerScore = 0;
playGame();