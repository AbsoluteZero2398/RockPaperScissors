const choices = ["rock", "paper", "scissors"];
const playerSelection = playerChoice();
const computerSelection = computerChoice();

function game(){
playRound();
}

function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors");
    input = input.toLowerCase();
    console.log(input);
    }
    
    function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
    }

function playRound(playerSelection, computerSelection){

switch(true){

case playerSelection == "rock" && computerSelection == 0:
    console.log("Tie");
    break;
case playerSelection == "paper" && computerSelection == 1:
    console.log("Tie");
    break;
case playerSelection == "scissors" && computerSelection == 2:
    console.log("Tie");
    break;
case playerSelection == "rock" && computerSelection == 2:
    console.log("Win");
    break;
case playerSelection == "paper" && computerSelection == 0:
    console.log("Win");
    break;
case playerSelection == "scissors" && computerSelection == 1:
    console.log("Win");
    break;
case playerSelection == "rock" && computerSelection == 1:
    console.log("Lose");
    break;
case playerSelection == "paper" && computerSelection == 2:
    console.log("Lose");
    break;
case playerSelection == "scissors" && computerSelection == 0:
    console.log("Lose");
    break;

    }
}

game();