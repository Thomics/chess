import React, {useState} from 'react';
import Square from '../components/Square';
import Piece from '../components/Piece';
import GameState from '../utils/GameState';

const Gameboard = () => {
	const [gameData, updateGameData] = useState(
		new GameState().getDefaultGameData()
	);

	const moveGamePiece = (): any => {
		updateGameData([[{color: 'white', name: 'rook'}]]);
	};

	const _createGameboard = (gameData: any): any =>
		gameData.map((row: any) => _fillRowSquares(row));

	const _fillRowSquares = (rowData: any): any =>
		rowData.map((squareData: any) =>
			squareData ? _setSquareWithPiece(squareData) : _setEmptySquare()
		);

	const _setEmptySquare = (): any => <Square piece={null} />;

	const _setSquareWithPiece = (squareData: any): any => (
		<Square
			piece={
				<Piece
					name={squareData.name}
					color={squareData.color}
					moveGamePiece={moveGamePiece}
				/>
			}
		/>
	);

	return <div className='gameboard'>{_createGameboard(gameData)}</div>;
};

export default Gameboard;
