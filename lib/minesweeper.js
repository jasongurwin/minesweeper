'use strict';

var printBoard = function printBoard(board) {
    console.log('Current Board:');
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};
// const blankLine='  |   |  '
// const guessLine='1 |   |  '
// const bombLine='  | B |  '

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);

// console.log("This is what an empty board would look like:")
// console.log(guessLine)
// console.log(bombLine)
// console.log(blankLine)