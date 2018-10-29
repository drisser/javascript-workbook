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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack){
  let endNum = stacks[startStack].pop();
  stacks[endStack].push(endNum);
}

const validInput = ['a', 'b', 'c'];

const checkInput = (input) => {
  return validInput.indexOf(input) != -1
}

const validate = (startStack, endStack) => {
  return checkInput(startStack) && checkInput(endStack)
}

function isLegal(startStack, endStack) {
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

function checkForWin() {
  let checkStack = stacks.c.toString();
  if (checkStack == '4,3,2,1') {
    return 'win'
  } else return false
}

function towersOfHanoi(startStack, endStack) {
  if (validate(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      if (checkForWin()) {
        return 'win!'
      }
    } else {
      return 'invalid'
    } 
  } else return 'invalid'
}

function getPrompt() {
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
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
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
