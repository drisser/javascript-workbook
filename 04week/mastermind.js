'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const inputIsValid = (guess) => {
  // returns true or false
  // checks to see if the user input is 4 letters
  // checks to see if the user input matches the array of possible letters
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
}

const showHints=(guess)=>{
  const guessArr = guess.split('');
  const solutionArr = solution.split('');
  let rightLetterRightPlace = 0;
  let rightLetterWrongPlace = 0;
  guessArr.forEach((letter, index)=>{
    console.log(letter, 'current');
    const correspondingLetter = solutionArr[index];
    if (letter == correspondingLetter){
      rightLetterRightPlace ++
    } else if (solutionArr.includes(letter)){
      rightLetterWrongPlace ++
    } 
  });
  return `${rightLetterRightPlace} - ${rightLetterWrongPlace}`
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if (inputIsValid(guess)){
    board.push(guess)
    if (checkForWin(guess)){
      //tell the user they won
      resetBoard();
    } else if (!hasGuessesRemaining()){
      //tell the user they lost
      //Print solution
      resetBoard();
    } else {
      generateHint();
    }
  } else {
    //tell the user what type of input they need to enter
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
