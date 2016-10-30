function Pawn(id, color, piece, letter) {

  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;

}

//Takes the square the piece is currently sitting on, and determines the available moves for that piece.
//Returns an array of available moves.
Pawn.prototype.createMoves = function(currentSquare) {

  var legalMoves = [];

  //Next Square ahead.
  var square = (this.color === 'white') ? (currentSquare - 8) : (currentSquare + 8);
  var squareObj = vm.chessboard[square];


  if (!squareObj.occupied) {
    legalMoves.push(square);

    //Checks if the piece is able to move two steps forward.
    if (!this.moved) {
      square = (this.color === 'white') ? (currentSquare - 16) : (currentSquare + 16);
      squareObj = vm.chessboard[square];
      console.log(square);

      if (!squareObj.occupied) {
        legalMoves.push(square);
      }
    }
  }

  //Check En Passant
  var rightPassant = checkEnPassant(vm.chessboard[currentSquare+1], currentSquare, 7, this.color);
  if (rightPassant) { console.log('right'); legalMoves.push(rightPassant); }

  var leftPassant = checkEnPassant(vm.chessboard[currentSquare-1], currentSquare, 9, this.color);
  if (leftPassant) { console.log('left'); legalMoves.push(leftPassant); }


  //Program in the taking of the below piece, removing it from the board.


  //Check opponent pieces to the upper right/left.
  square = (this.color === 'white') ? (currentSquare - 7) : (currentSquare + 7);
  squareObj = vm.chessboard[square];
  if (squareObj.occupied && (vm.chessboard[currentSquare].piece.color != squareObj.piece.color)) {
    legalMoves.push(squareObj.squareNum);
  }

  square = (this.color === 'white') ? (currentSquare - 9) : (currentSquare + 9);
  squareObj = vm.chessboard[square];
  if (squareObj.occupied && (vm.chessboard[currentSquare].piece.color != squareObj.piece.color)) {
    legalMoves.push(squareObj.squareNum);
  }

  return legalMoves;

  //Code 8th Row
};

//Checks for En Passant move availability.
function checkEnPassant(squareObj, currentSquare, offset, color) {

  if ( squareObj.piece.piece === 'pawn' && squareObj.piece.previousSquares.length === 2 ) {
    return (color === 'white') ? (currentSquare - offset) : (currentSquare + offset);
  }
  return false;

}

