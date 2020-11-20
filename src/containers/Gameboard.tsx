import React, {useState} from 'react';
import Square from '../components/Square';
import Piece from '../components/Piece';
import GameState from '../utils/GameState';

const Gameboard = () => {
	const [gameData, updateGameData] = useState(
		new GameState().getDefaultGameData()
	);

	const moveGamePiece = (pieceData: any): any => {
		updateGameData(gameData);
	};

	const _createGameboard = (gameData: any): any =>
		gameData.map((row: any) => _fillRowSquares(row));

	const _fillRowSquares = (rowData: any): any =>
		rowData.map((squareData: any) =>
			squareData
				? _setSquareWithPiece(squareData)
				: _setEmptySquare(squareData)
		);

	const _setEmptySquare = (squareData: any): any => (
		<Square piece={null} row={squareData.row} column={squareData.column} />
	);

	const _setSquareWithPiece = (squareData: any): any => (
		<Square
			piece={
				<Piece pieceData={squareData} moveGamePiece={moveGamePiece} />
			}
			row={squareData.row}
			column={squareData.column}
		/>
	);

	return <div className='gameboard'>{_createGameboard(gameData)}</div>;
};

export default Gameboard;
