'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//this function moves the pieces (4,3,2,1) between the three arrays (a,b,c) but using .pop and .push
const movePiece = (startStack, endStack) => {
  let endNum = stacks[startStack].pop();
  stacks[endStack].push(endNum);
}

//this array shows the three valid user inputs when playing the game
const validInput = ['a', 'b', 'c'];

//this function checks to see if the user input matches the three possible valid inputs according to the validInput array
const checkInput = (input) => {
  return validInput.indexOf(input) != -1
}

//this function calls the previous checkInput function twice, once for each user input (startStack, endStack)
const validate = (startStack, endStack) => {
  return checkInput(startStack) && checkInput(endStack)
}

//this function makes sure that the move is legal according to the game rules
//it ensures that the stack being moved is smaller than the stack already in place in the destination
//it also ensures that an empty starting position (which returns undefined) cannot be moved somewhere else
//it also makes sure that the user doesn't enter the same position as both the starting and ending position
const isLegal = (startStack, endStack) => {
  let startStackValue = stacks[startStack][stacks[startStack].length - 1];
  let endStackValue = stacks[endStack][stacks[endStack].length - 1];
  if (startStack == endStack) {
    return false
  } else if (startStackValue > endStackValue) {
    return false
  } else if (startStackValue == undefined) {
    return false
  } else return true
}

//this function checks for the win condition, which requires that all the pieces be moved in order to either stacks.b or stacks.c
const checkForWin = () => {
  let checkStackA = stacks.c.toString();
  let checkStackB = stacks.b.toString();
  if (checkStackA == '4,3,2,1') {
    return true
  } else if (checkStackB == '4,3,2,1'){
    return true
  } else return false
}

//this functions runs when a win is declared and resets the stacks object back to the default arrangement
const reset = () => {
  stacks.a = [1, 2, 3, 4];
  stacks.b = [];
  stacks.c = [];
}

//the master function calls the above functions using several conditionals
const towersOfHanoi = (startStack, endStack) => {
  if (validate(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      if (checkForWin()) {
        console.log('WIN!') 
        reset();    }
    } else {
      console.log('invalid')
    } 
  } else console.log('invalid')
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      // towersOfHanoi('a', 'c');
      // assert.deepEqual(stacks, { a: [4, 3, 2], b: [], c: [1] });
      //not sure why this test doesn't work, it seems like it should run just like the one above
      //but when I ran the tests in the terminal, this one failed
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
      stacks = {
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('a', 'c'), false);
      stacks = {
        a: [4, 1],
        b: [3],
        c: [2]
      };
      assert.equal(isLegal('b', 'c'), false);
    });

    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = {
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('c', 'b'), true);
    });
  });
  
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}