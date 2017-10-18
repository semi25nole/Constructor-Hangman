//Create variables to hold your npm installs
var inquirer = require('inquirer');

//Create a variable that will allow the user to make a guess via the CLI
var guess = process.argv[2];

//Create a word constructor function to hold the word the users will be trying to guess
function Word (first)  {
    this.first = first;
};

//Create an empty array to place the missed guesses inside
var missed = [];

//Need to create a new word for the user to guess
var word = new Word("Ardvark");


//Need to create a for loop to check the guess with the letters in the word to find a match
//Create an if/else function to check if the guess is equal to the word; if not, append the letter to the random.txt
function game () {
    for (var i = 0; i > word.first.length; i++) {
        if (guess === word.first.length[i]) {
            console.log(guess);
        } else {
            console.log('error');
        }
    }
};

game();





