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


    function Square(row, column, occupied, piece) {
      this.row = row;
      this.column = column;
      this.occupied = occupied;
      this.piece = piece;
    }


    function createBoard() {
      var chessSquare;
      var chessRow = [];
      for ( var i = 0; i <= 7; i++ ) {
        for ( var j = 0; j <= 7; j++ ) {
          if ( i <= 1 || i >= 6 ) {
            chessSquare = setPieces(i, j);
          } else {
            chessSquare = new vm.Square(i, j, false, '');
          }
          chessRow.push(chessSquare);
        }
        vm.chessboard.push(chessRow);
        chessRow = [];
      }
      console.log(vm.chessboard);

    }



    function setPieces(i, letter) {
      var color = (i >= 6) ? 'white' : 'black';
      var pieceLetter;

      if ( i === 1 || i === 6 ) {
        pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
        var piece = new Pawn(i, letter, color, pieceLetter);
        return new vm.Square(i, letter, true, piece);

      } else if ( letter === 0 || letter === 7 ) {
        pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
        return new vm.Square(i, letter, true, {piece: 'rook', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 1 || letter === 6) {
        pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
        return new vm.Square(i, letter, true, {piece: 'knight', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 2 || letter === 5) {
        pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
        return new vm.Square(i, letter, true, {piece: 'bishop', color: color, pieceLetter: pieceLetter});

      } else if ( letter === 3) {
        pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
        return new vm.Square(i, letter, true, {piece: 'queen', color: color, pieceLetter: pieceLetter});

      } else {
        pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
        return new vm.Square(i, letter, true, {piece: 'king', color: color, pieceLetter: pieceLetter});
      }

    }


    function Pawn(row, column, color, letter) {

      this.row = row;
      this.column = column;
      this.piece = 'pawn';
      this.color = color;
      this.pieceLetter = letter;
      this.moved = false;
      this.move = function() {
        console.log(this);

        movePiece(this);

      };


    }

    function movePiece(piece, destination) {

      console.log(vm.chessboard[piece.row][piece.column]);
    }





  }

})();
