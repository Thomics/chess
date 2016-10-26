'use strict';

var vm = this;

vm.chessboard = [];
vm.createBoard = createBoard;
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


function Square( squareNum, occupied, piece) {
  this.squareNum = squareNum;
  this.occupied = occupied;
  this.piece = piece;
}


function Pawn(id, color, letter) {

  this.id = id;
  this.piece = 'pawn';
  this.color = color;
  this.pieceLetter = letter;
  this.previousSquares = [id];
  this.lastSquare = id;
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




function setPieces(i, j, squareNum) {

  if ( i <= 15 ) { var color = 'black'; }
  if ( i >= 48 ) { var color = 'white'; }

  var pieceLetter = '';

  if ( (i >= 8 && i <= 15) || (i >= 48 && i <= 55) ) {
    pieceLetter = (color === 'white') ? 'p' : 'o'; //Pawn White p, Black o
    var piece = new Pawn(i, color, pieceLetter);
    return new vm.Square(i, true, piece);

  } else if ( i === 0 || i === 7 || i === 56 || i === 63 ) {
    pieceLetter = (color === 'white') ? 'r' : 't'; //Rook White r, Black t
    return new vm.Square(i, true, {piece: 'rook', color: color, pieceLetter: pieceLetter});

  } else if ( i === 1 || i === 6 || i === 57 || i === 62 ) {
    pieceLetter = (color === 'white') ? 'h' : 'j'; //Knight White h, Black j
    return new vm.Square(i, true, {piece: 'knight', color: color, pieceLetter: pieceLetter});

  } else if ( i === 2 || i === 5 || i === 58 || i === 61 ) {
    pieceLetter = (color === 'white') ? 'b' : 'n'; //Bishop White b, Black n
    return new vm.Square(i, true, {piece: 'bishop', color: color, pieceLetter: pieceLetter});

  } else if ( i === 3 || i === 59 ) {
    pieceLetter = (color === 'white') ? 'q' : 'w'; //Queen White q, Black w
    return new vm.Square(i, true, {piece: 'queen', color: color, pieceLetter: pieceLetter});

  } else if (i === 4 || i == 60) {
    pieceLetter = (color === 'white') ? 'k' : 'l'; //King White k, Black l
    return new vm.Square(i, true, {piece: 'king', color: color, pieceLetter: pieceLetter});
  } else {

    return new vm.Square(i, false, {piece: '', color: '', pieceLetter: ''});
  }

}





function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {

  ev.dataTransfer.setData("text", ev.target.id);
  ev.target.style.opacity = ".99";
}



function drop(ev) {
  console.log(ev);

  ev.preventDefault();

  //The ID of the moved piece
  var piece = ev.dataTransfer.getData("text");

  //Gets the square that the element came from.
  var previousSquare = vm.chessboard[Number(piece)];
  console.log(previousSquare);


  //Get the target square whether the user takes another piece or places it in an empty square.
  var targetSquare = ev.target.classList.length === 0 ? ev.target.parentElement : ev.target;

  //The class/id of the target square.
  var newSquare = targetSquare.classList[1] || '';

  //console.log(targetSquare);


  targetSquare.innerHTML = '';

  //Adds the piece to the target square.
  targetSquare.appendChild(document.getElementById(piece));

  movePiece(Number(newSquare), Number(piece), previousSquare);

  ev.dataTransfer.clearData();

}

//newSquare - the id/class of the new square.
//pieceID - the id of the piece that was moved.
function movePiece(newSquare, pieceId, previousSquare) {

  console.log(newSquare);
  console.log(pieceId);
  console.log(previousSquare);


  var squareId = vm.chessboard[newSquare].lastSquare;


  //The square object that holds the square info and the piece object.
  var pieceObj = vm.chessboard[pieceId].piece;
  //console.log(pieceObj);


  //Gets the value of the pieces most recent square location.
  var oldSquare = pieceObj.lastSquare;

  //Sets the value of the pieces most recent square to the current square.
  pieceObj.lastSquare = newSquare;

  //Adds the previous square to the list of squares the piece has been on.
  pieceObj.previousSquares.push(newSquare);
  console.log(pieceObj.previousSquares.length);


  pieceObj.moved = true;

  //Sets the new square to occupied, the old square to not occupied.
  vm.chessboard[newSquare].occupied = true;
  vm.chessboard[oldSquare].occupied = false;

  //Moves the piece from one square to another (objects).
  vm.chessboard[newSquare].piece = pieceObj;
  vm.chessboard[oldSquare].piece = {piece: '', color: '', pieceLetter: ''};
  console.log(vm.chessboard[newSquare]);
  console.log(vm.chessboard[oldSquare]);


}





function generateHtml(chessSquare) {
  return '<div class="chess-space ' + chessSquare.squareNum + '" ondrop="drop(event)"  ondragover="allowDrop(event)"><p ondragstart="drag(event)" draggable="true" id="' + chessSquare.squareNum + '">' + chessSquare.piece.pieceLetter + '</p></div>\n'
}
