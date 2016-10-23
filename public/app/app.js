'use strict';

var vm = this;

vm.chessboard = [];
vm.createBoard = createBoard;
vm.emptySquare = emptySquare;
vm.Square = Square;
vm.activate = activate;
vm.generateHtml = generateHtml;
vm.allowDrop = allowDrop;
vm.drag = drag;
vm.drop = drop;


///////////////////////////////


activate();

function activate() {
  vm.createBoard();
}


function Square(row, column, squareNum, occupied, piece) {
  this.row = row;
  this.column = column;
  this.squareNum = squareNum;
  this.occupied = occupied;
  this.piece = piece;
}


function createBoard() {
  var chessSquare;
  var chessRow = [];
  var squareNum = 1;
  var text = '';
  for ( var i = 0; i <= 7; i++ ) {
    for ( var j = 0; j <= 7; j++ ) {

      if ( i <= 1 || i >= 6 ) {
        chessSquare = setPieces(i, j, squareNum);
      } else {
        var emptySquare = new vm.emptySquare(i, j, '');
        chessSquare = new vm.Square(i, j, squareNum, false, emptySquare);
      }
      chessRow.push(chessSquare);
      text += vm.generateHtml(chessSquare);
      squareNum++;
    }
    vm.chessboard.push(chessRow);
    chessRow = [];
  }
  console.log(vm.chessboard);
  console.log(text);
  document.getElementById('chessboard-container').innerHTML = text;
}



function setPieces(i, j, squareNum) {
  var color = (i >= 6) ? 'white' : 'black';
  var pieceLetter = '';

  if ( i === 1 || i === 6 ) {
    pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
    var piece = new Pawn(i, j, color, pieceLetter);
    return new vm.Square(i, j, squareNum, true, piece);

  } else if ( j === 0 || j === 7 ) {
    pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
    return new vm.Square(i, j, squareNum, true, {piece: 'rook', color: color, pieceLetter: pieceLetter});

  } else if ( j === 1 || j === 6) {
    pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
    return new vm.Square(i, j, squareNum, true, {piece: 'knight', color: color, pieceLetter: pieceLetter});

  } else if ( j === 2 || j === 5) {
    pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
    return new vm.Square(i, j, squareNum, true, {piece: 'bishop', color: color, pieceLetter: pieceLetter});

  } else if ( j === 3) {
    pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
    return new vm.Square(i, j, squareNum, true, {piece: 'queen', color: color, pieceLetter: pieceLetter});

  } else {
    pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
    return new vm.Square(i, j, squareNum, true, {piece: 'king', color: color, pieceLetter: pieceLetter});
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

    movePiece(this);

  };


}

function emptySquare(row, column, letter) {
  this.row = row;
  this.column = column;
  this.pieceLetter = letter;
}


function movePiece(piece) {

  //Move the piece to the new spot


  vm.chessboard[piece.row][piece.column].piece = vm.chessboard[piece.row--][piece.column].piece;
  vm.chessboard[piece.row][piece.column].piece = piece;


  console.log(vm.chessboard[piece.row][piece.column]);



}




function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  console.log('dragged');

  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  console.log('dropped');

  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}



function generateHtml(chessSquare) {

  return '<div class="chess-space" ondrop="drop(event)" ondragover="allowDrop(event)"><p ondragstart="drag(event)" draggable="true" id="' + chessSquare.squareNum + '">' + chessSquare.piece.pieceLetter + '</p></div>\n'

}
