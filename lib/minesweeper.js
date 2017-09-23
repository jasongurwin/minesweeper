'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {

      this._board.flipTile(rowIndex, columnIndex);

      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {

        console.log('Game Over! Final Board:');
        this._board.print();
      } else if (!this._board.hasSafeTiles()) {

        console.log('Congratulations, you won!');
      } else {

        console.log('Current Board:');
        this._board.print();
      }
    }
  }]);

  return Game;
}();

var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;

    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',
    value: function flipTile(rowIndex, columnIndex) {

      if (this._playerBoard[rowIndex][columnIndex] !== ' ') {

        console.log('This tile has already been flipped!');
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {

        this._playerBoard[rowIndex][columnIndex] = 'B';
        return;
      } else {

        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        return;
      }

      this._numberOfTiles--;
    }
  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numberOfRows = this._bombBoard.length;
      var numberOfColumns = this._bombBoard[0].length;
      var numberOfBombs = 0;

      neighborOffsets.forEach(function (offset) {

        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];

        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {

          if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {

            numberOfBombs++;
          }
        }
      });

      return numberOfBombs;
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles(numberOfTiles, numberOfBombs) {

      return this._numberOfTiles !== this._numberOfBombs;
    }
  }, {
    key: 'print',
    value: function print(board) {

      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {

      var board = [];

      for (var rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
        var row = [];

        for (var colNumber = 1; colNumber <= numberOfColumns; colNumber++) {

          row.push(' ');
        }
        board.push(row);
      }
      return board;
    }
  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

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

        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        if (board[randomRowIndex][randomColumnIndex] !== 'B') {

          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        };
      };

      return board;
    }
  }]);

  return Board;
}();

;

var g = new Game(3, 3, 3);

g.playMove(1, 1);

//
//
//
//
//
//
//
//
//
//
//
// let playerBoard=generatePlayerBoard(3,3)
// let bombBoard=generateBombBoard(3,3,5)
//
// console.log('Player Board:')
// printBoard(playerBoard)
// console.log('Bomb Board')
// printBoard(bombBoard)
//
// flipTile(playerBoard,bombBoard,0,0)
//
// console.log('Updated Player Board:')
// printBoard(playerBoard)