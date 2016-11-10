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

  var leftEdge = [0, 8, 16, 24, 32, 40, 48, 56, 64];
  var leftMiddle = [1, 9, 17, 25, 33, 41, 49, 57];
  var rightEdge = [7, 15, 23, 31, 39, 47, 55, 63];
  var rightMiddle = [6, 14, 22, 30, 38, 46, 54, 62];

  //Checks the left side of the board to verify that the Knight isn't jumping from one side of the board to the other.
  if (leftEdge.indexOf(currentSquare) > -1) {
    //Creates rooks vertical movement list.
    var leftEdgeMoves = checkKnightMoves(currentSquare, this.color, [-6, -15, 10, 17]);
    legalMoves = leftEdgeMoves.concat(legalMoves);
  } else if (leftMiddle.indexOf(currentSquare) > -1) {
    var leftMiddleMoves = checkKnightMoves(currentSquare, this.color, [-17, -15, -6, 10, 15, 17]);
    legalMoves = leftMiddleMoves.concat(legalMoves);

  //Checks the right side of the board to verify that the Knight isn't jumping from one side of the board to the other.
  } else if (rightEdge.indexOf(currentSquare) > -1) {
    //Creates rooks vertical movement list.
    var rightEdgeMoves = checkKnightMoves(currentSquare, this.color, [-17, -10, 6, 15]);
    legalMoves = rightEdgeMoves.concat(legalMoves);
  } else if (rightMiddle.indexOf(currentSquare) > -1) {
    var rightMiddleMoves = checkKnightMoves(currentSquare, this.color, [-17, -15, -10, 6, 15, 17]);
    legalMoves = rightMiddleMoves.concat(legalMoves);

  //If the knight isn't on the edges, then we check all of the possible moves.
  } else {
    var verticalMoves = checkKnightMoves(currentSquare, this.color, [-17, -15, -10, -6, 6, 10, 15, 17]);
    legalMoves = verticalMoves.concat(legalMoves);
  }

  return legalMoves;
};


function checkKnightMoves(currentSquare, color, knightMoves) {

  var availableMoves = [];

  for ( var i = 0; i < knightMoves.length; i++ ) {
    var posMove = knightMoves[i] + currentSquare;

    var squareObj = ( posMove <= 63 && posMove >= 0 ) ? vm.chessboard[posMove] : -1;

    if (squareObj != -1) {
      if (!squareObj.occupied) {
        console.log(squareObj);
        availableMoves.push(squareObj.squareNum);
      } else if (squareObj.piece.color !== color && squareObj.occupied) {
        availableMoves.push(squareObj.squareNum);
      }
    }
  }

  return availableMoves;
}
