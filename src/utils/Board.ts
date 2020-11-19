export default class Board {
	BOARD_SIZE: number = 8;

	getBoard(): Array<object> {
		const boardData = this._createEmptyBoardData();

		this._fillPawns(boardData, 'white', 1);
		this._fillPawns(boardData, 'black', 6);
		this._fillBackrow(boardData, 'white', 0);
		this._fillBackrow(boardData, 'black', 7);

		return boardData;
	}

	_createEmptyBoardData(): Array<object> {
		return [...Array(this.BOARD_SIZE)].map(() =>
			Array(this.BOARD_SIZE).fill(this._baseSquareData())
		);
	}

	_baseSquareData(): object {
		return {piece: null};
	}

	_fillPawns(
		gameboard: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		return gameboard[row].fill({piece: 'pawn', color: color});
	}

	_fillBackrow(
		gameboard: Array<{[key: string]: any}>,
		color: string,
		row: number
	): Array<object> {
		gameboard[row][0] = {piece: 'rook', color: color};
		gameboard[row][1] = {piece: 'knight', color: color};
		gameboard[row][2] = {piece: 'bishop', color: color};
		gameboard[row][3] = {piece: 'queen', color: color};
		gameboard[row][4] = {piece: 'king', color: color};
		gameboard[row][5] = {piece: 'bishop', color: color};
		gameboard[row][6] = {piece: 'knight', color: color};
		gameboard[row][7] = {piece: 'rook', color: color};

		return gameboard;
	}
}
