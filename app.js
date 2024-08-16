function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice === 0) return "rock";
    else if(randomChoice === 1) return "paper";
    else return "scissors";
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll("button");
    const results = document.querySelector(".results");

    function playRound(humanChoice, computerChoice){

        let humanChoiceLowerCase = humanChoice.toLowerCase();

        
            //rock
            if(humanChoiceLowerCase === "rock" && computerChoice === "rock"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: rock. The computer chose rock. It's a draw!";
                results.appendChild(runningScore);
            }
            else if(humanChoiceLowerCase === "rock" && computerChoice === "paper"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: rock. The computer chose paper. You lose!";
                results.appendChild(runningScore);
                ++computerScore;
            }
            else if(humanChoiceLowerCase === "rock" && computerChoice === "scissors"){
                console.log("You win! Rock beats scissors.");
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: rock. The computer chose scissors. You win!";
                results.appendChild(runningScore);
                ++humanScore;
            }
            
            //paper
            else if(humanChoiceLowerCase === "paper" && computerChoice === "rock"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: paper. The computer chose rock. You win!";
                results.appendChild(runningScore);
                ++humanScore;
            }
            else if(humanChoiceLowerCase === "paper" && computerChoice === "paper"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: paper. The computer chose paper. It's a draw!";
                results.appendChild(runningScore);
            }
            else if(humanChoiceLowerCase === "paper" && computerChoice === "scissors"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: paper. The computer chose scissors. You lose!";
                results.appendChild(runningScore);
                ++computerScore;
            }
        
            //scissors
            else if(humanChoiceLowerCase === "scissors" && computerChoice === "rock"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: scissors. The computer chose rock. You lose!";
                results.appendChild(runningScore);
                ++computerScore;
            }
            else if(humanChoiceLowerCase === "scissors" && computerChoice === "paper"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: scissors. The computer chose paper. You win!";
                results.appendChild(runningScore);
                ++humanScore;
            }
            else if(humanChoiceLowerCase === "scissors" && computerChoice === "scissors"){
                const runningScore = document.createElement("div");
                runningScore.classList.add("runningScore");
                runningScore.textContent = "You chose: scissors. The computer chose scissors. It's a draw!";
                results.appendChild(runningScore);
            }
            else{
                console.log("That's not a valid choice.");
                ++computerScore;
            }

            if(humanScore == 5){
                const runningScore = document.createElement("div");
                runningScore.textContent = "You won!";
                results.appendChild(runningScore);
            }
            else if(computerScore == 5){
                const runningScore = document.createElement("div");
                runningScore.textContent = "You lost!";
                results.appendChild(runningScore);
            }
            else{
                const runningScore = document.createElement("div");
                runningScore.textContent = "Player: " + humanScore + " Computer: " + computerScore;
                results.appendChild(runningScore);
            }
    }

    

    buttons.forEach(item => {
        item.addEventListener("click", () => {
            const playerChoice = item.textContent;
            const computerSelection = getComputerChoice();
            if(humanScore < 5 && computerScore <5){
                playRound(playerChoice, computerSelection);    
            }
            else if(humanScore == 5){
                const runningScore = document.createElement("div");
                runningScore.textContent = "You've already won!";
                results.appendChild(runningScore);
            }else{
                const runningScore = document.createElement("div");
                runningScore.textContent = "You've already lost...";
                results.appendChild(runningScore);
            }
            
        })
    });
}

playGame();

