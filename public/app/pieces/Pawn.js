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

  //Check opponent pieces to the upper right/left.
  square = (this.color === 'white') ? (currentSquare - 7) : (currentSquare + 7);
  square = vm.chessboard[square];
  if ( square.occupied && (vm.chessboard[currentSquare].piece.color != square.piece.color)) {
    legalMoves.push(square.squareNum);
  }

  square = (this.color === 'white') ? (currentSquare - 9) : (currentSquare + 9);
  square = vm.chessboard[square];
  if ( square.occupied && (vm.chessboard[currentSquare].piece.color != square.piece.color)) {
    legalMoves.push(square.squareNum);
  }

  return legalMoves;

  //Code En Passant / 8th Row
};
