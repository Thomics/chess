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

  //Creates rooks vertical movement list.
  var verticalMoves = checkRookMoves(currentSquare, 8, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkRookMoves(currentSquare, 8, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  //Creates rooks vertical movement list
  verticalMoves = checkRookMoves(currentSquare, 1, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkRookMoves(currentSquare, 1, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};


function checkRookMoves(currentSquare, offset, color, direction) {
  var availableMoves = [];
  var count = offset;

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
    console.log(offset + currentSquare);

    offset += count;
  }

  return availableMoves;
}