'use strict';

var vm = this;

vm.chessboard = [];
vm.createBoard = createBoard;
vm.pieceList = {};
vm.Square = Square;
vm.activate = activate;
vm.generateHtml = generateHtml;
vm.allowDrop = allowDrop;
vm.drag = drag;
vm.drop = drop;
vm.movePiece = movePiece;


///////////////////////////////


activate();

function activate() {
  vm.createBoard();
}


function Square( squareNum, occupied, piece) {
  this.squareNum = squareNum;
  this.occupied = occupied;
  this.piece = piece;
}


function Piece(id, color, piece, letter) {
  this.id = id;
  this.piece = piece;
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.currentSquare = id;
  this.moved = false;
}


function createBoard() {
  var chessSquare;
  var text = '';

  for ( var i = 0; i < 64; i++ ) {

    chessSquare = setPieces(i);

    text += vm.generateHtml(chessSquare);
    vm.chessboard.push(chessSquare);
  }

  document.getElementById('chessboard-container').innerHTML = text;
}


function setPieces(i) {

  if ( i <= 15 ) { var color = 'black'; }
  if ( i >= 48 ) { var color = 'white'; }

  var pieceLetter = '';
  var piece = {};
  if ( (i >= 8 && i <= 15) || (i >= 48 && i <= 55) ) {
    pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
    piece = new Pawn(i, color, 'pawn', pieceLetter);
  } else if ( i === 0 || i === 7 || i === 56 || i === 63 ) {
    pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
    piece = new Rook(i, color, 'rook', pieceLetter);
  } else if ( i === 1 || i === 6 || i === 57 || i === 62 ) {
    pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
    piece = new Piece(i, color, 'knight', pieceLetter, []);
  } else if ( i === 2 || i === 5 || i === 58 || i === 61 ) {
    pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
    piece = new Piece(i, color, 'bishop', pieceLetter, []);
  } else if ( i === 3 || i === 59 ) {
    pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
    piece = new Piece(i, color, 'queen', pieceLetter, []);
  } else if (i === 4 || i == 60) {
    pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
    piece = new Piece(i, color, 'king', pieceLetter, []);
  } else {
    piece = {piece: '', color: '', pieceLetter: '', previousSquares: []};
    return new vm.Square(i, false, piece, []);
  }

  vm.pieceList[i] = piece;
  return new vm.Square(i, true, piece);

}


function allowDrop(ev) {
  ev.preventDefault();
}


function drag(ev) {
  var lastSquare = ev.path[1].classList[1];

  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData('previousSquare', lastSquare);
  ev.target.style.opacity = ".99";
}


function drop(ev) {
  //console.log(ev);

  ev.preventDefault();

  //The ID of the moved piece
  var pieceId = Number(ev.dataTransfer.getData('text'));
  //The square the piece just moved from.
  var previousSquare = Number(ev.dataTransfer.getData('previousSquare'));

  //Get the target square whether the user takes another piece or places it in an empty square.
  var targetSquare = ev.target.classList.length === 0 ? ev.target.parentElement : ev.target;
  //The class/id of the target square.
  var newSquare = Number(targetSquare.classList[1]) || -1;

  //Current Chess Piece
  var pieceObj = vm.pieceList[pieceId];


  var legalMoves = pieceObj.createMoves(previousSquare);


  if ( legalMoves.indexOf(newSquare) >= 0 ) {

    targetSquare.innerHTML = '';

    //Adds the piece to the target square.
    targetSquare.appendChild(document.getElementById(pieceId));

    vm.movePiece(newSquare, previousSquare, pieceId);

    ev.dataTransfer.clearData();

  }


}


//newSquare - the id/class of the new square.
//previousSquare - the previous squares number.
//pieceID - the id of the piece that was moved.
function movePiece(newSquare, previousSquare, pieceId) {

  var pieceObj = vm.pieceList[pieceId];
  console.log(pieceObj);


  //Adds the square the piece moved from to the list of previous squares.
  pieceObj.previousSquares.push(newSquare);
  pieceObj.moved = true;
  pieceObj.currentSquare = newSquare;

  //Sets the new square to occupied, the old square to not occupied.
  vm.chessboard[newSquare].occupied = true;
  vm.chessboard[previousSquare].occupied = false;

  //Moves the piece from one square to another (objects).
  vm.chessboard[newSquare].piece = pieceObj;
  vm.chessboard[previousSquare].piece = {piece: '', color: '', pieceLetter: ''};
  vm.chessboard[previousSquare].occupied = false;




}


function generateHtml(chessSquare) {
  return '<div class="chess-space ' + chessSquare.squareNum + '" ondrop="drop(event)"  ondragover="allowDrop(event)"><p ondragstart="drag(event)" draggable="true" id="' + chessSquare.squareNum + '">' + chessSquare.piece.pieceLetter + '</p></div>\n'
}
