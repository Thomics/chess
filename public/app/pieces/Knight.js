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
  var verticalMoves = checkKnightMoves(currentSquare, this.color);
  legalMoves = verticalMoves.concat(legalMoves);

  return legalMoves;
};

//Moves -10, -17, -15, -6, 10, 17, 15, 6


function checkKnightMoves(currentSquare, color) {
  var knightMoves = [-17, -15, -10, -6, 6, 10, 15, 17];
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


  //
  //while ( true ) {
  //  var squareObj = (direction === 'forward') ? vm.chessboard[currentSquare - offset] : vm.chessboard[currentSquare + offset];
  //
  //  if ( squareObj === undefined ) {
  //    break;
  //  } else if (!squareObj.occupied) {
  //    availableMoves.push(squareObj.squareNum);
  //  } else if (squareObj.piece.color !== color && squareObj.occupied) {
  //    availableMoves.push(squareObj.squareNum);
  //    break;
  //  } else if (squareObj.piece.color === color && squareObj.occupied) {
  //    break;
  //  }
  //
  //  offset += 8;
  //}
  console.log(availableMoves);

  return availableMoves;
}
