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
  var verticalMoves = checkVerticalRook(currentSquare, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkVerticalRook(currentSquare, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  //Creates rooks horizontal movement list
  verticalMoves = checkHorizontalRook(currentSquare, 1, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = checkHorizontalRook(currentSquare, 1, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};


function checkVerticalRook(currentSquare, color, direction) {
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


function checkHorizontalRook(currentSquare, offset, color, direction) {
  var availableMoves = [];
  var count = offset;
  var boardEdges = [0, 8, 16, 24, 32, 40, 48, 56, 7, 15, 23, 31, 39, 47, 55, 63];

  while ( true ) {
    var squareObj = (direction === 'forward') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];

    if ( squareObj === undefined ) {
      break;
    } else if (boardEdges.indexOf(squareObj.squareNum) > -1) {
      availableMoves.push(squareObj.squareNum);
      break;
    } else if (!squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
    } else if (squareObj.piece.color !== color && squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
      break;
    } else if (squareObj.piece.color === color && squareObj.occupied) {
      break;
    }

    offset += count;
  }

  return availableMoves;
}
