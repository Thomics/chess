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
      var color = (i >= 7) ? 'black' : 'white';
      var pieceLetter;

      if ( i === 2 || i === 7 ) {
        pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
        var piece = new Pawn(color, pieceLetter);
        return new vm.Square(i, letter, true, piece);
        //return new vm.Square(i, letter, true, { piece: 'pawn', color: color, pieceLetter: pieceLetter, touched: false });

      } else if ( letter === 'A' || letter === 'H' ) {
        pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
        return new vm.Square(i, letter, true, {piece: 'rook', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'B' || letter === 'G') {
        pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
        return new vm.Square(i, letter, true, {piece: 'knight', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'C' || letter === 'F') {
        pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
        return new vm.Square(i, letter, true, {piece: 'bishop', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'D') {
        pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
        return new vm.Square(i, letter, true, {piece: 'queen', color: color, pieceLetter: pieceLetter});

      } else {
        pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
        return new vm.Square(i, letter, true, {piece: 'king', color: color, pieceLetter: pieceLetter});
      }

    }


    function Pawn(color, letter) {

      this.piece = 'pawn';
      this.color = color;
      this.letter = letter;
      this.moved = false;
      this.move = this.column++;

    }



  }

})();
