let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum;
    randomNum = Math.random();
    
    if (randomNum >= 0 && randomNum < 0.33){
        return "shitou";
    }
    else if (randomNum >= 0.33 && randomNum < 0.66){
        return "bu";
    }
    else{
        return "jiandao";
    }
}

let computerChoice = getComputerChoice();

function getHumanChoice(){
    let humanChoice = prompt();
    humanChoice = humanChoice.toLowerCase();
    console.log("The human selects: " + humanChoice);

    if(humanChoice == "shitou"){
        return "shitou";
    }
    else if(humanChoice == "bu"){
        return "bu";
    }
    else if(humanChoice == "jiandao"){
        return "jiandao";
    }
    else{
        return "bu";
    }
}

function playRound(humanSelection, computerSelection){
    switch(true){
        case humanSelection == computerSelection:
            console.log("Nobody win.");
            return;
        case humanSelection == "shitou" && computerSelection == "jiandao":
            console.log("Human win.");
            return humanScore += 1;
        case humanSelection == "shitou" && computerSelection == "bu":
            console.log("Computer win.");
            return computerScore += 1;
        case humanSelection == "bu" && computerSelection == "shitou":
            console.log("Human win.");
            return humanScore += 1;
        case humanSelection == "bu" && computerSelection == "jiandao":
            console.log("Computer win.")
            return computerScore += 1;
        case humanSelection == "jiandao" && computerSelection == "bu":
            console.log("Human win.");
            return humanScore += 1;
        case humanSelection == "jiandao" && computerSelection == "shitou":
            console.log("Computer win.");
            return computerScore += 1;
        default:
            console.log("Something error!")
    }
}

for (let i = 0; i < 5; i++){
    console.log("The computer selects: " + computerChoice);
    playRound(getHumanChoice(), getComputerChoice())
}