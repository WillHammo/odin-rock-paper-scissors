function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice == 0) return "Rock";
    else if(randomChoice == 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
    let choice = prompt("What is your choice?");
    let choiceLowerCase = choice.toLowerCase();
    return choiceLowerCase;
}
