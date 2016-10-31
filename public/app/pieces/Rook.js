function Rook(id, color, piece, letter) {

  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;

}

Rook.prototype.createMoves = function(currentSquare) {
  var legalMoves = [];
  var verticalMoves = checkRookVertical(currentSquare, 8, this.color);

  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};


function checkRookVertical(currentSquare, offset, color) {
  var availableMoves = [];

  while ( true ) {
    var squareObj = (color === 'white') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];
    console.log(squareObj);

    if (!squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
    } else if (squareObj.piece.color !== color && squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
    } else {
      console.log('break');
      break;
    }

    offset += 8;
  }

  return availableMoves;
}