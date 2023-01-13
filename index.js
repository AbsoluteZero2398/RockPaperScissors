const choices = ["rock", "paper", "scissors"];

function game(){
playRound();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null) {
        input = prompt('Type Rock, Paper, Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesn't matter"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    }

    function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
    }

function validateInput(input){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

game();