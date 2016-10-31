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

  //Checks if the square in front of the pawn is available (both one move and two moves).
  if (!squareObj.occupied) {
    legalMoves.push(square);

    //Checks if the piece is able to move two steps forward.
    if (!this.moved) {
      square = (this.color === 'white') ? (currentSquare - 16) : (currentSquare + 16);
      squareObj = vm.chessboard[square];

      if (!squareObj.occupied) {
        legalMoves.push(square);
      }
    }

  }

  //Check En Passant
  var rightPassant = checkEnPassant(vm.chessboard[currentSquare+1], currentSquare, 7, this.color);
  if (rightPassant) { console.log('right'); legalMoves.push(rightPassant); }
  var leftPassant = checkEnPassant(vm.chessboard[currentSquare-1], currentSquare, 9, this.color);
  if (leftPassant) { legalMoves.push(leftPassant); }


  //Check if the pawn can take a piece.
  var rightCheck = checkPawnTake(currentSquare, 7, this.color);
  if (rightCheck) { legalMoves.push(rightCheck); }
  var leftCheck = checkPawnTake(currentSquare, 9, this.color);
  if (leftCheck) { legalMoves.push(leftCheck); }


  return legalMoves;

  //Code 8th Row
  //Program in the taking of the below piece, removing it from the board. En Passant

};

//@todo
//Incomplete implementation Finish
//Checks for En Passant move availability.
function checkEnPassant(squareObj, currentSquare, offset, color) {

  if ( squareObj.piece.piece === 'pawn' && squareObj.piece.previousSquares.length === 2 ) {
    console.log(color === 'white');
    console.log(currentSquare);

    return (color === 'white') ? (currentSquare - offset) : (currentSquare + offset);
  }
  return false;

}

function checkPawnTake(currentSquare, offset, color) {

  var squareObj = (color === 'white') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];
  if (squareObj.occupied && (vm.chessboard[currentSquare].piece.color != squareObj.piece.color)) {
    return squareObj.squareNum;
  }
  return false;
}
