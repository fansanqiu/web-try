let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum;
    randomNum = Math.random();
    
    if (randomNum >= 0 && randomNum < 0.33){
        return "rock";
    }
    else if (randomNum >= 0.33 && randomNum < 0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Input","paper");

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == "rock"){
        console.log("The human selects: " + humanChoice);
        return "rock";
    }
    else if(humanChoice == "paper"){
        console.log("The human selects: " + humanChoice);
        return "paper";
    }
    else if(humanChoice == "scissor"){
        console.log("The human selects: " + humanChoice);
        return "scissor";
    }
    else{
        console.log("Something error");
    }
}

function playRound(humanSelection, computerSelection){
    switch(true){
        case humanSelection === computerSelection:
            console.log("Nobody win.");
            break;
        case humanSelection === "rock" && computerSelection === "scissor":
            console.log("Human win.");
            humanScore += 1;
            break;
        case humanSelection === "rock" && computerSelection === "paper":
            console.log("Computer win.");
            computerScore += 1;
            break;
        case humanSelection === "paper" && computerSelection === "rock":
            console.log("Human win.");
            humanScore += 1;
            break;
        case humanSelection == "paper" && computerSelection === "scissor":
            console.log("Computer win.")
            computerScore += 1;
            break;
        case humanSelection === "scissor" && computerSelection === "paper":
            console.log("Human win.");
            humanScore += 1;
            break;
        case humanSelection === "scissor" && computerSelection === "rock":
            console.log("Computer win.");
            computerScore += 1;
            break;
        default:
            console.log("Something error!")
    }
}

for (let i = 0; i < 5; i++){
    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log("The computer selects: " + computerChoice);
    
    playRound(humanChoice, computerChoice);
}

console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)