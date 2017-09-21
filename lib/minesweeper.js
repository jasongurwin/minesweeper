'use strict';

// const blankLine='  |   |  '
// const guessLine='1 |   |  '
// const bombLine='  | B |  '

// const board = [
//             [' ',' ',' '],
//             [' ',' ',' '],
//             [' ',' ',' ']
//            ];
//
//
// // printBoard(board)
//
// board[0][1]='1'
// board[2][2]='B'

// printBoard(board)

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {

  var board = [];

  for (var rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
    var row = [];

    for (var colNumber = 1; colNumber <= numberOfColumns; colNumber++) {

      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

  var board = [];

  for (var rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
    var row = [];

    for (var colNumber = 1; colNumber <= numberOfColumns; colNumber++) {

      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {

    //This may place bombs on top an existing board position

    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex] = 'B';

    numberOfBombsPlaced++;
  };

  return board;
};


var printBoard = function printBoard(board) {

  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board');
printBoard(bombBoard);
