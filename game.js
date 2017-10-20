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
    var array = word.first.split("");
    for (var i = 0; i > array.length; i++) {
        var happy = array[i].indexOf(guess);
        if (happy > -1) {
            console.log(missed.push(guess));
            console.log('this is your : ' + guess); //this will console log the word guessed by the user
        } else {
            console.log('error');
        }
    }
}

game();





