export default class GameState {
	private BOARD_SIZE: number = 8;

	// getDefaultGameData(): Array<object> {
	getDefaultGameData(): any {
		const boardData = this._createEmptyBoardData();

		this._fillPawns(boardData, 'white', 6);
		this._fillPawns(boardData, 'black', 1);
		this._fillBackrow(boardData, 'white', 7);
		this._fillBackrow(boardData, 'black', 0);

		return boardData;
	}

	_createEmptyBoardData(): Array<object> {
		return [...Array(this.BOARD_SIZE)].map((_, rowIndex) =>
			Array.from(Array(this.BOARD_SIZE), (_, columnIndex) => ({
				row: rowIndex,
				column: columnIndex,
			}))
		);
	}

	_fillPawns(
		board: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		return board[row].map(
			(_: any, index: number) =>
				(board[row][index] = {
					...board[row][index],
					name: 'pawn',
					color: color,
				})
		);
	}

	_fillBackrow(
		board: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		board[row][0] = {...board[row][0], name: 'rook', color: color};
		board[row][1] = {...board[row][1], name: 'knight', color: color};
		board[row][2] = {...board[row][2], name: 'bishop', color: color};
		board[row][3] = {...board[row][3], name: 'queen', color: color};
		board[row][4] = {...board[row][4], name: 'king', color: color};
		board[row][5] = {...board[row][5], name: 'bishop', color: color};
		board[row][6] = {...board[row][6], name: 'knight', color: color};
		board[row][7] = {...board[row][7], name: 'rook', color: color};

		return board;
	}
}
