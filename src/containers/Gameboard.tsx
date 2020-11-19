import React from 'react';
import Square from '../components/Square';

const Gameboard = () => {
	const gameboard = createGameboard();

	return <div className='gameboard'>{gameboard}</div>;
};

const createGameboard = (): Array<object> => {
	const boardData = _createEmptyBoardData();

	_fillPawns(boardData, 'white', 6);
	_fillPawns(boardData, 'black', 1);
	_fillBackrow(boardData, 'black', 0);
	_fillBackrow(boardData, 'white', 7);

	return boardData;
};

const _createEmptyBoardData = (): Array<object> => {
	return [...Array(8)].map(() =>
		Array(8).fill(<Square piece={{name: '', color: ''}} />)
	);
};

const _fillPawns = (
	gameboard: Array<{[key: string]: any}>,
	color: string,
	row: number
): Array<object> => {
	return gameboard[row].fill(_createSquare('pawn', color));
};

const _fillBackrow = (
	gameboard: Array<{[key: string]: any}>,
	color: string,
	row: number
): Array<object> => {
	gameboard[row][0] = _createSquare('rook', color);
	gameboard[row][1] = _createSquare('knight', color);
	gameboard[row][2] = _createSquare('bishop', color);
	gameboard[row][3] = _createSquare('queen', color);
	gameboard[row][4] = _createSquare('king', color);
	gameboard[row][5] = _createSquare('bishop', color);
	gameboard[row][6] = _createSquare('knight', color);
	gameboard[row][7] = _createSquare('rook', color);

	return gameboard;
};

const _createSquare = (name: string, color: string): any => (
	<Square piece={{name: name, color: color}} />
);

export default Gameboard;
