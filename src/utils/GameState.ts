export default class GameState {
	private BOARD_SIZE: number = 8;

	// getDefaultGameData(): Array<object> {
	getDefaultGameData(): any {
		const boardData = this._createEmptyBoardData();

		this._fillPawns(boardData, 'white', 1);
		this._fillPawns(boardData, 'black', 6);
		this._fillBackrow(boardData, 'white', 0);
		this._fillBackrow(boardData, 'black', 7);

		return boardData;
	}

	_createEmptyBoardData(): Array<object> {
		return [...Array(this.BOARD_SIZE)].map(() =>
			Array(this.BOARD_SIZE).fill(null)
		);
	}

	_fillPawns(
		gameboard: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		return gameboard[row].fill({name: 'pawn', color: color});
	}

	_fillBackrow(
		gameboard: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		gameboard[row][0] = {name: 'rook', color: color};
		gameboard[row][1] = {name: 'knight', color: color};
		gameboard[row][2] = {name: 'bishop', color: color};
		gameboard[row][3] = {name: 'queen', color: color};
		gameboard[row][4] = {name: 'king', color: color};
		gameboard[row][5] = {name: 'bishop', color: color};
		gameboard[row][6] = {name: 'knight', color: color};
		gameboard[row][7] = {name: 'rook', color: color};

		return gameboard;
	}
}
