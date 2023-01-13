const choices = ["rock", "paper", "scissors"];
const playerSelection = playerChoice();
const computerSelection = computerChoice();
alert("variables initialized");

function game(){
playRound();
}
alert("first function");

function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null){
        input = prompt('Type Rock, Paper, Scissors')
    }
    input = input.toLowerCase();
    console.log(input);
    }

alert("second function");

    function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
    }

alert("third function");

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

alert("fourth function, switch has completed");

function validateInput(input){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

alert("fifth function");

game();