function King(id, color, piece, letter) {

  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;

}

King.prototype.createMoves = function(currentSquare) {

  var legalMoves = [];

  //Creates Queens diagonal movement list.
  var diagonalMoves = kingDiagonalMoves(currentSquare, this.color, 9, 'forward');
  legalMoves = diagonalMoves.concat(legalMoves);
  diagonalMoves = kingDiagonalMoves(currentSquare, this.color, 9, 'backward');
  legalMoves = diagonalMoves.concat(legalMoves);
  diagonalMoves = kingDiagonalMoves(currentSquare, this.color, 7, 'forward');
  legalMoves = diagonalMoves.concat(legalMoves);
  diagonalMoves = kingDiagonalMoves(currentSquare, this.color, 7, 'backward');
  legalMoves = diagonalMoves.concat(legalMoves);

  //Creates Queens vertical movement list.
  var verticalMoves = kingVerticalMoves(currentSquare, this.color, 'forward');
  legalMoves = verticalMoves.concat(legalMoves);
  verticalMoves = kingVerticalMoves(currentSquare, this.color, 'backwards');
  legalMoves = verticalMoves.concat(legalMoves);

  //Creates Queens horizontal movement list
  var horizontalMoves = kingHorizontalMoves(currentSquare, 1, this.color, 'forward');
  legalMoves = horizontalMoves.concat(legalMoves);
  horizontalMoves = kingHorizontalMoves(currentSquare, 1, this.color, 'backwards');
  legalMoves = horizontalMoves.concat(legalMoves);

  return legalMoves;
};


function kingDiagonalMoves(currentSquare, color, offset, direction) {
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
      break;
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



function kingVerticalMoves(currentSquare, color, direction) {
  var availableMoves = [];
  var offset = 8;

  while ( true ) {
    var squareObj = (direction === 'forward') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];

    if ( squareObj === undefined ) {
      break;
    } else if (!squareObj.occupied) {
      availableMoves.push(squareObj.squareNum);
      break;
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


function kingHorizontalMoves(currentSquare, offset, color, direction) {
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
      break;
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
