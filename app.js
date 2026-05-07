// Number Guessing Game in JavaScript
// Save as game.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Guess a number between 1 and 10");

rl.question("Enter your guess: ", (answer) => {
    const guess = Number(answer);

    if (guess === randomNumber) {
        console.log("Correct! You guessed the number.");
    } else {
        console.log(`Wrong! The correct number was ${randomNumber}`);
    }

    rl.close();
});
