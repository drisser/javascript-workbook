'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [1],
  b: [],
  c: [4, 3, 2]
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//this function 
const movePiece = (startStack, endStack) => {
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

const checkForWin = () => {
  let checkStackA = stacks.c.toString();
  let checkStackB = stacks.b.toString();
  if (checkStackA == '4,3,2,1') {
    return true
  } else if (checkStackB == '4,3,2,1'){
    return true
  } else return false
}

const reset = () => {
  stacks.a = [1, 2, 3, 4];
  stacks.b = [];
  stacks.c = [];
}

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
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [], c: [1] });
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