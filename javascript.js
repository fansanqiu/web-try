const getBtn = document.querySelector('#content')
const getHumanChoose = document.querySelector('#humanChoose')
const getComputerChoose = document.querySelector('#computerChoose')
const getHumanScore = document.querySelector('#humanScore')
const getComputerScore = document.querySelector('#computerScore')
const getResult = document.querySelector('#result')

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    switch(true){
        case humanSelection === computerSelection:
            getResult.textContent = "Nobody win.";
            break;
        case humanSelection === "rock" && computerSelection === "scissor" || humanSelection === "paper" && computerSelection === "rock" || humanSelection === "scissor" && computerSelection === "paper":
            getResult.textContent = "Human win.";
            humanScore += 1;
            getHumanScore.textContent = humanScore
            break;
        case humanSelection === "rock" && computerSelection === "paper" || humanSelection === "scissor" && computerSelection === "rock" || humanSelection == "paper" && computerSelection === "scissor":
            getResult.textContent = "Computer win.";
            computerScore += 1;
            getComputerScore.textContent = computerScore
            break;
        default:
            getResult.textContent = "Something error!"
    }
}

getBtn.addEventListener('click', (event)=>{
    let randomNum;
    randomNum = Math.random();
    let humanSelection;
    let computerSelection;
    let target = event.target;
    
    if (randomNum >= 0 && randomNum < 0.33){
        computerSelection = "rock";
        getComputerChoose.textContent = "rock"
    }
    else if (randomNum >= 0.33 && randomNum < 0.66){
        computerSelection = "paper";
        getComputerChoose.textContent = "paper"
    }
    else{
        computerSelection = "scissor";
        getComputerChoose.textContent = "scissor"
    }

    switch(target.id){
        case 'rock':
            humanSelection = "rock";
            getHumanChoose.textContent = "rock"
            break
        case 'paper':
            humanSelection = "paper";
            getHumanChoose.textContent = "paper"
            break
        case 'scissor':
            humanSelection = "scissor"
            getHumanChoose.textContent = "scissor"
            break
    }

    playRound(humanSelection, computerSelection)
})