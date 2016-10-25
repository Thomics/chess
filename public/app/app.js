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
  console.log(ev.path);

  ev.preventDefault();
  //var piece = Number(ev.dataTransfer.getData("text"));
  var piece = ev.dataTransfer.getData("text");

  console.log(piece);

  ev.target.innerHTML = '';
  ev.target.appendChild(document.getElementById(piece));
  console.log(ev.target.outerHTML);


  //var targetPiece = Number(ev.target.outerHTML.split('id="')[1].split('\"')[0]);
  //var targetSquare = Number(ev.target.classList[1]);
  //var turget = ev.target.classList[1];
  //
  //console.log(targetSquare);
  //console.log(turget);
  //
  //console.log(document.getElementsByClassName(targetSquare)[0]);
  //
  //document.getElementsByClassName(targetSquare)[0].innerHTML = '';
  //
  //document.getElementsByClassName(targetSquare)[0].appendChild(document.getElementById(piece));
  //
  //console.log(document.getElementById(piece));
  //console.log(document.getElementsByClassName(targetSquare)[0]);

  //movePiece(targetSquare, piece);

}


function movePiece(newSquare, oldSquare ) {

  vm.chessboard[newSquare].occupied = true;
  vm.chessboard[newSquare].piece = vm.chessboard[oldSquare].piece;
  vm.chessboard[newSquare].piece.moved = true;

  vm.chessboard[oldSquare].occupied = false;
  vm.chessboard[oldSquare].piece = {piece: '', color: '', pieceLetter: ''};

  console.log(vm.chessboard[newSquare]);
  console.log(vm.chessboard[oldSquare]);

}





function generateHtml(chessSquare) {
  return '<div class="chess-space ' + chessSquare.squareNum + '" ondrop="drop(event)"  ondragover="allowDrop(event)"><p ondragstart="drag(event)" draggable="true" id="' + chessSquare.squareNum + '">' + chessSquare.piece.pieceLetter + '</p></div>\n'
}
