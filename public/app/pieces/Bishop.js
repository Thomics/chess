function Bishop(id, color, piece, letter) {

  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;

}


Bishop.prototype.createMoves = function(currentSquare) {
  var legalMoves = [];

  //Creates bishop diagonal movement list.
  var verticalMoves = checkBishopMoves(currentSquare, this.color, 9, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkBishopMoves(currentSquare, this.color, 9, 'backward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkBishopMoves(currentSquare, this.color, 7, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkBishopMoves(currentSquare, this.color, 7, 'backward');
  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};

function checkBishopMoves(currentSquare, color, offset, direction) {
  var availableMoves = [];
  var count = offset;
  var boardEdges = [0, 8, 16, 24, 32, 40, 48, 56, 7, 15, 23, 31, 39, 47, 55, 63];
  var leftEdge = [0, 8, 16, 24, 32, 40, 48, 56];
  var rightEdge = [7, 15, 23, 31, 39, 47, 55, 63];



  while (true) {
    var squareObj = (direction === 'forward') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];

    //If the bishop is on the outside squares, we don't want it to be able to jump across the board illegally.
    if ( (leftEdge.indexOf(currentSquare) > -1 && offset === 7 && direction === 'backward')
      || (rightEdge.indexOf(currentSquare) > -1 && offset === 7 && direction === 'forward')
      || (squareObj === undefined)
      || (squareObj.piece.color === color && squareObj.occupied) ) {
      break;
    } else if (!squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
    } else if (boardEdges.indexOf(squareObj.squareNum) > -1) {
      availableMoves.push(squareObj.squareNum);
      break;
    } else if (squareObj.piece.color !== color && squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
      break;
    }

    offset += count;

  }

  return availableMoves;

}
