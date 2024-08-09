function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice === 0) return "rock";
    else if(randomChoice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("What is your choice?");
    return choice;
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let humanChoiceLowerCase = humanChoice.toLowerCase();
        //rock
        if(humanChoiceLowerCase === "rock" && computerChoice === "rock"){
            console.log("It's a draw!");
        }
        else if(humanChoiceLowerCase === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats rock.");
            --humanScore;
            ++computerScore;
        }
        else if(humanChoiceLowerCase === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors.");
            ++humanScore;
            --computerScore;
        }
        
        //paper
        else if(humanChoiceLowerCase === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock.");
            ++humanScore;
            --computerScore;
        }
        else if(humanChoiceLowerCase === "paper" && computerChoice === "paper"){
            console.log("It's a draw!");
        }
        else if(humanChoiceLowerCase === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper.");
            --humanScore;
            ++computerScore;
        }
    
        //scissors
        else if(humanChoiceLowerCase === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissors.");
            --humanScore;
            ++computerScore;
        }
        else if(humanChoiceLowerCase === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            ++humanScore;
            --computerScore;
        }
        else if(humanChoiceLowerCase === "scissors" && computerChoice === "scissors"){
            console.log("It's a draw!");
        }
        else{
            console.log("That's not a valid choice.")
        }
    }
    
    for(let i = 0; i < 5; i++){
        console.log("Round: " + (i+1))
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
    }

    if(humanScore > computerScore){
        console.log("YOU WIN THE GAME!")
    }
    else{
        console.log("The computer wins the game...")
    }
}

playGame();