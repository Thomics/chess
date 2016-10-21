/**
 * Controls the chessboard.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('chess')
    .controller('ChessController', ChessController);

  ChessController.$inject = ['$scope'];

  function ChessController($scope) {

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


    function Square(row, column, square, occupied, piece) {
      this.row = row;
      this.column = column;
      this.square = square;
      this.occupied = occupied;
      this.piece = piece;
    }


    function createBoard() {
      var chessSquare;
      var squareCount = 1;
      var chessRow = [];
      for ( var i = 8; i >= 1; i-- ) {
        for ( var j = 1; j <= 8; j++ ) {
          var colLetter = String.fromCharCode(j + 64);

          if ( i <= 2 || i >= 7 ) {
            chessSquare = setPieces(i, colLetter, squareCount++);
          } else {
            chessSquare = new vm.Square(i, colLetter, squareCount++, false, '');
          }
          chessRow.push(chessSquare);
        }
        vm.chessboard.push(chessRow);
        chessRow = [];
      }
      console.log(vm.chessboard);

    }



    function setPieces(i, letter, count) {
      var color = (i >= 7) ? 'black' : 'white';
      var pieceLetter;

      if ( i === 2 || i === 7 ) {
        pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
        var piece = new Pawn(i, letter, color, pieceLetter);
        return new vm.Square(i, letter, count, true, piece);
        //return new vm.Square(i, letter, true, { piece: 'pawn', color: color, pieceLetter: pieceLetter, touched: false });

      } else if ( letter === 'A' || letter === 'H' ) {
        pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
        return new vm.Square(i, letter, count, true, {piece: 'rook', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'B' || letter === 'G') {
        pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
        return new vm.Square(i, letter, count, true, {piece: 'knight', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'C' || letter === 'F') {
        pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
        return new vm.Square(i, letter, count, true, {piece: 'bishop', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 'D') {
        pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
        return new vm.Square(i, letter, count, true, {piece: 'queen', color: color, pieceLetter: pieceLetter});

      } else {
        pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
        return new vm.Square(i, letter, count, true, {piece: 'king', color: color, pieceLetter: pieceLetter});
      }

    }


    function Pawn(row, column, color, letter) {

      this.row = row;
      this.column = column;
      this.piece = 'pawn';
      this.color = color;
      this.letter = letter;
      this.moved = false;
      this.move = function() {

        for ( var i = 0; i < vm.chessboard.length; i++ ) {
          if (vm.chessboard[i].piece === this) {

            console.log(vm.chessboard[i].row);
            console.log(vm.chessboard[i].column);


          }
        }


      };


    }






  }

})();
