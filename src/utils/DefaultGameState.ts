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
					piece: `${color}Pawn`,
				})
		);
	}

	_fillBackrow(
		board: Array<Array<GameDataType>>,
		color: string,
		row: number
	): Array<object> {
		board[row][0] = {...board[row][0], piece: `${color}Rook`};
		board[row][1] = {...board[row][1], piece: `${color}Knight`};
		board[row][2] = {...board[row][2], piece: `${color}Bishop`};
		board[row][3] = {...board[row][3], piece: `${color}Queen`};
		board[row][4] = {...board[row][4], piece: `${color}King`};
		board[row][5] = {...board[row][5], piece: `${color}Bishop`};
		board[row][6] = {...board[row][6], piece: `${color}Knight`};
		board[row][7] = {...board[row][7], piece: `${color}Rook`};

		return board;
	}
}

type GameDataType = {
	piece: string | null;
	row: number;
	column: number;
};
