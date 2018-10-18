'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  const move1 = hand1.trim();
  const move2 = hand2.trim();
  const move1a = move1.toLowerCase();
  const move2a = move2.toLowerCase();
  if (move1a && move2a === 'rock' || 'scissors' || 'paper'){
    if (move1a === move2a){
      return 'Tie!';
    } else if (move1a === 'paper' && move2a === 'rock'){
      return 'Hand 1 wins!';
    } else if (move1a === 'paper' && move2a === 'scissors'){
      return 'Hand 2 wins!';
    } else if (move1a === 'rock' && move2a === 'paper'){
      return 'Hand 2 wins!';
    } else if (move1a === 'rock' && move2a === 'scissors'){
      return 'Hand 1 wins!';
    } else if (move1a === 'scissors' && move2a === 'paper'){
      return 'Hand 1 wins!';
    } else if (move1a === 'scissors' && move2a === 'rock'){
      return 'Hand 2 wins!';
    }
  } return 'please enter a valid move'; 
} 

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}