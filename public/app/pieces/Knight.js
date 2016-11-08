function Knight(id, color, piece, letter) {

  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;

}

Knight.prototype.createMoves = function(currentSquare) {
  var legalMoves = [];

  //Creates rooks vertical movement list.
  var verticalMoves = checkKnightMoves(currentSquare, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkKnightMoves(currentSquare, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};

//Moves -10, -17, -15, -6, 10, 17, 15, 6

function checkKnightMoves(currentSquare, color, direction) {
  var availableMoves = [];
  var offset = 8;
  
  while ( true ) {
    var squareObj = (direction === 'forward') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];
    
    if ( squareObj === undefined ) {
      break;
    } else if (!squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
    } else if (squareObj.piece.color !== color && squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
      break;
    } else if (squareObj.piece.color === color && squareObj.occupied) {
      break;
    }
    
    offset += 8;
  }
  
  return availableMoves;
}
