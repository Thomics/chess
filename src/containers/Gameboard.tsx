import React, {useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
// import { TouchBackend } from 'react-dnd-touch-backend' // figure out the mobile part of backend
import Square from '../components/Square';
import Piece from '../components/Piece';
import GameState from '../utils/GameState';

const Gameboard = () => {
	const [gameData, updateGameData] = useState(
		new GameState().getDefaultGameData()
	);

	const moveGamePiece = (row: string, column: string, piece: any): any => {
		updateGameData(gameData);
	};

	const _createGameboard = (
		gameData: Array<Array<GameDataType>>
	): Array<Array<JSX.Element>> =>
		gameData.map((row: Array<GameDataType>) => _fillRowSquares(row));

	const _fillRowSquares = (
		rowData: Array<GameDataType>
	): Array<JSX.Element> =>
		rowData.map((squareData: GameDataType) =>
			squareData
				? _setSquareWithPiece(squareData)
				: _setEmptySquare(squareData)
		);

	const _setEmptySquare = (squareData: GameDataType): JSX.Element => (
		<Square
			piece={null}
			row={squareData.row}
			column={squareData.column}
			moveGamePiece={moveGamePiece}
		/>
	);

	const _setSquareWithPiece = (squareData: GameDataType): JSX.Element => (
		<Square
			piece={<Piece pieceData={squareData} />}
			row={squareData.row}
			column={squareData.column}
			moveGamePiece={moveGamePiece}
		/>
	);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='gameboard'>{_createGameboard(gameData)}</div>
		</DndProvider>
	);
};

type GameDataType = {
	name: string;
	color: string;
	row: number;
	column: number;
};

export default Gameboard;
