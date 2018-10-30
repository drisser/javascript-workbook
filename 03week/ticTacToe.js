'use strict';

//MY CODE PLAN!

//validate the user input - it must be equal to either 0, 1, or 2
const validInputArr = [0, 1, 2]

const checkInput = (input) => {
  return validInputArr.indexOf(input) != -1
}

const validate = (row, column) => {
  return checkInput(row) && checkInput(column)
}

//check to see if the selected row and column are occupied or not - function isPositionOpen = if index[row][column] != ''
const isPositionOpen = (row, column) => {
  return board[row][column] == ' '
}

//take user input and turn it into either an X or an O on the board - function placeMove = board[1][1] = 'X'
const placeMove = (row, column) => {
  if (playerTurn == 'X') {
    board[row][column] = 'X';
  } else { 
    board[row][column] = 'O';
  }  
}

//check for win using win conditions listed below
function horizontalWin() {
  if ((board[0][0] == 'X') && (board[0][1] == 'X') && (board[0][2] == 'X')){
    return true
  } else if ((board[1][0] =='X') && (board[1][1] == 'X') && (board[1][2] == 'X')){
    return true
  } else if ((board[2][0] == 'X') && (board[2][1] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][0] == 'O') && (board[0][1] == 'O') && (board[0][2] == 'O')){
    return true
  } else if ((board[1][0] =='O') && (board[1][1] == 'O') && (board[1][2] == 'O')){
    return true
  } else if ((board[2][0] == 'O') && (board[2][1] == 'O') && (board[2][2] == 'O')){
    return true
  } else {
    return false
  }
}

function verticalWin() {
  if ((board[0][0] == 'X') && (board[1][0] == 'X')  && (board[2][0] == 'X')){
    return true
  } else if ((board[0][1] == 'X') && (board[1][1] == 'X') && (board[2][1] == 'X')){
    return true
  } else if ((board[0][2] == 'X') && (board[1][2] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][0] == 'O') && (board[1][0] == 'O')  && (board[2][0] == 'O')){
    return true
  } else if ((board[0][1] == 'O') && (board[1][1] == 'O') && (board[2][1] == 'O')){
    return true
  } else if ((board[0][2] == 'O') && (board[1][2] == 'O') && (board[2][2] == 'O')){
    return true
  } else {
    return false
  }
}

function diagonalWin() {
  if ((board[0][2] == 'X') && (board[1][1] == 'X') && (board[2][0] == 'X')){
    return true
  } else if ((board[0][0] == 'X') && (board[1][1] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][2] == 'O') && (board[1][1] == 'O') && (board[2][0] == 'O')){
    return true
  } else if ((board[0][0] == 'O') && (board[1][1] == 'O') && (board[2][2] == 'O')){
    return true
  } else {
    return false
  }
}

function checkForWin() {
  if (diagonalWin()){
    return true
  } else if (horizontalWin()){
    return true
  } else if (verticalWin()){
    return true
  } else {
    return false
  }
}

//if no win is determined, switch players and rerun the function
const changePlayer = () =>{
  if (playerTurn == 'X'){
    playerTurn = 'O'
  } else if (playerTurn = 'O'){
    playerTurn = 'X'
  }
}

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//here is my full function pulling all the other small functions together
function ticTacToe(row, column) {
  if (validate(row, column)){
    if (isPositionOpen(row, column)){
      placeMove(row, column);
    } else {
      console.log('invalid position')
    }  
  } else {
    console.log('wrong position')
  } 
  if (checkForWin()){
    console.log(playerTurn + ' wins!')
  } else changePlayer();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
