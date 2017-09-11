
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

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  let board=[];

  for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber ++){
    let row=[];

    for (let colNumber = 1; colNumber <= numberOfColumns; colNumber ++){

      row.push(' ');

    }
    board.push(row);
  }
  return board;
  };

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {

  let board=[];

  for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber ++){
    let row=[];

    for (let colNumber = 1; colNumber <= numberOfColumns; colNumber ++){

      row.push(null);

    }
    board.push(row);
  }

  let numberOfBombsPlaced=0

  while (numberOfBombsPlaced<numberOfBombs){

    //This may place bombs on top an existing board position

    randomRowIndex=Math.floor(Math.random() * numberOfRows);
    randomColumnIndex=Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex]= 'B';

    numberOfBombsPlaced++
  };


  return board;

};

let printBoard=(board) => {

  console.log(board.map(row => row.join(' | ')).join('\n'));



};

let playerBoard=generatePlayerBoard(3,4)
let bombBoard=generateBombBoard(3,4,5)

console.log('Player Board:')
printBoard(playerBoard)
console.log('Bomb Board')
printBoard(bombBoard)
