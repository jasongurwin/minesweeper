
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

    let randomRowIndex=Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex=Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] != 'B') {

      board[randomRowIndex][randomColumnIndex]= 'B';
      numberOfBombsPlaced++;

    } ;


  };


  return board;

};


const getNumberOfNeighborBombs = (bombBoard,rowIndex,columnIndex) => {

  const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {

    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns){

      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){

        numberOfBombs ++;



      }


    }

    return numberOfBombs

  });



}

let printBoard=(board) => {

  console.log(board.map(row => row.join(' | ')).join('\n'));



};

let playerBoard=generatePlayerBoard(3,4)
let bombBoard=generateBombBoard(3,4,5)

console.log('Player Board:')
printBoard(playerBoard)
console.log('Bomb Board')
printBoard(bombBoard)
