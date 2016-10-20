/**
 * Controls the chessboard.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('chess')
    .controller('ChessController', ChessController);

  //ChessController.$inject = [];

  function ChessController() {

    var vm = this;

    vm.chessboard = [];
    vm.createBoard = createBoard;
    vm.Square = Square;
    vm.activate = activate;


    /////////////////////////////////

    activate();


    function activate() {
      vm.createBoard();
    }


    function Square(row, column, occupied, piece) {
      this.row = row;
      this.column = column;
      this.occupied = occupied;
      this.piece = piece;
    }


    function createBoard() {
      var chessSquare;
      for ( var i = 8; i >= 1; i-- ) {
        for ( var j = 1; j <= 8; j++ ) {
          var colLetter = String.fromCharCode(j + 64);

          if ( i <= 2 || i >= 7 ) {
            chessSquare = setPieces(i, colLetter);
          } else {
            chessSquare = new vm.Square(i, colLetter, false, '');
          }
          vm.chessboard.push(chessSquare);
        }
      }
      console.log(vm.chessboard);

    }


    function setPieces(i, letter) {
      var color = 'white';
      if ( i >= 7 ) {
        color = 'black';
      }

      if ( i === 2 || i === 7 ) {
        return new vm.Square(i, letter, true, {piece: 'pawn', color: color});
      } else if ( letter === 'A' || letter === 'H' ) {
        return new vm.Square(i, letter, true, {piece: 'rook', color: color});
      } else if ( letter === 'B' || letter === 'G') {
        return new vm.Square(i, letter, true, {piece: 'knight', color: color});
      } else if ( letter === 'C' || letter === 'F') {
        return new vm.Square(i, letter, true, {piece: 'bishop', color: color});
      } else if ( letter === 'D') {
        return new vm.Square(i, letter, true, {piece: 'queen', color: color});
      } else {
        return new vm.Square(i, letter, true, {piece: 'king', color: color});
      }
    }





  }

})();
