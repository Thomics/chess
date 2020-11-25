export default class DefaultGameState {
	private BOARD_SIZE: number = 8;

	getDefaultGameData(): Array<Array<GameDataType>> {
		const boardData = this._createEmptyBoardData();

		this._fillPawns(boardData, 'white', 6);
		this._fillPawns(boardData, 'black', 1);
		this._fillBackrow(boardData, 'white', 7);
		this._fillBackrow(boardData, 'black', 0);

		return boardData;
	}

	_createEmptyBoardData(): Array<Array<GameDataType>> {
		return [...Array(this.BOARD_SIZE)].map((_, rowIndex) =>
			Array.from(Array(this.BOARD_SIZE), (_, columnIndex) => ({
				row: rowIndex,
				column: columnIndex,
				piece: null,
				color: null,
			}))
		);
	}

	_fillPawns(
		board: Array<Array<GameDataType>>,
		color: string,
		row: number
	): Array<GameDataType> {
		return board[row].map(
			(_: any, index: number) =>
				(board[row][index] = {
					...board[row][index],
					piece: 'pawn',
					color: color,
				})
		);
	}

	_fillBackrow(
		board: Array<Array<GameDataType>>,
		color: string,
		row: number
	): Array<object> {
		board[row][0] = {
			...board[row][0],
			piece: 'rook',
			color: color,
		};
		board[row][1] = {
			...board[row][1],
			piece: 'knight',
			color: color,
		};
		board[row][2] = {
			...board[row][2],
			piece: 'bishop',
			color: color,
		};
		board[row][3] = {
			...board[row][3],
			piece: 'queen',
			color: color,
		};
		board[row][4] = {
			...board[row][4],
			piece: 'king',
			color: color,
		};
		board[row][5] = {
			...board[row][5],
			piece: 'bishop',
			color: color,
		};
		board[row][6] = {
			...board[row][6],
			piece: 'knight',
			color: color,
		};
		board[row][7] = {
			...board[row][7],
			piece: 'rook',
			color: color,
		};

		return board;
	}
}

type GameDataType = {
	piece: string | null;
	color: string | null;
	row: number;
	column: number;
};
