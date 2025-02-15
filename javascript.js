//function to get the choice of the computer
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    if (choice = 1){
        return "rock";
    } else if (choice = 2){
        return "paper";
    }
    else {return "scissors";}
}

//function to get the human choice
function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors? (type in your choice)");
    return choice;
}

//function to play the entire game
function playGame(){
    //scores
    let humanScore = 0;
    let computerScore = 0;
    //function to play each round
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        console.log("Computer choice: "+computerChoice)
        if (humanChoice === computerChoice){
            console.log("That's a draw!")
        } else if (humanChoice==="rock" && computerChoice==="scissors"){
            humanScore++;
            console.log("Rock beats Scissors. You won!")
        } else if (humanChoice==="rock" && computerChoice==="paper") {
            computerScore++;
            console.log("You lost... Paper beats Rock.")
        } else if (humanChoice==="paper" && computerChoice==="rock") {
            humanScore++;
            console.log("You won! Paper beats Rock.")
        } else if (humanChoice==="paper" && computerChoice==="scissors") {
            computerScore++;
            console.log("You lost... Scissors defeats Paper.")
        } else if (humanChoice==="scissors" && computerChoice==="rock") {
            computerScore++;
            console.log("You lost... Rock beats Scissors.")
        } else if (humanChoice==="scissors" && computerChoice==="paper") {
            humanScore++;
            console.log("You won! Scissors beats Paper.")
        }
        console.log("Your score: "+humanScore);
        console.log("Computer score: "+computerScore);
    }

    //counter of the 5 rounds
    for(let i=1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore>computerScore){
        console.log("Congratulations! You won the game!");
    } else if (computerScore>humanScore){
        console.log("You lost this one.")
    } else {
        console.log("The game finished in a draw.")
    }
}

playGame();