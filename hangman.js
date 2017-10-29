//npm install requirements
var inquirer = require("inquirer");

//create empty arrays that will hold the correct and incorrect guesses
var correct = [];
var missed = [];

//create a variable that will contain the word the user will try and guess
var word = "ants";


//Create a function that will run the game through inquirer; this will need to have a switch case statement to check the user's input
function game() {
    inquirer.prompt([
        {
            name: "guess",
            type: "input",
            message: "Guess a letter"
        }
    ]).then(function(answer) {
            switch(answer.guess){
                case "a":
                    correct.push(answer.guess);
                    console.log(correct);
                    break;
                case "n":
                    correct.push(answer.guess);
                    console.log(correct);
                    break;
                case "t":
                    correct.push(answer.guess);
                    console.log(correct);
                    break;
                case "s":
                    correct.push(answer.guess);
                    console.log(correct);
                    break;
                default:
                    missed.push("_");
                    console.log(missed);
            }
            if(correct.length === 4) {
                console.log("You guessed it" + "\n" + "ANTS" + "\n" + "was the word!!! Awesome job!");
                return;
            } else if(missed.length > 4) {
                console.log("Whomp Whomp!! The answer was ants, you lose!");
                return;
            }
            game();
    });
}

//Call the game function so the game will run
game();