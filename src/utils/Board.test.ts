import Board from './Board';

describe('Gameboard container', () => {
	test('should generate an empty gameboard', () => {
		const board = new Board(),
			boardData: Array<{[key: string]: any}> = board.getBoard();

		expect(boardData[2]).toEqual([
			{piece: null},
			{piece: null},
			{piece: null},
			{piece: null},
			{piece: null},
			{piece: null},
			{piece: null},
			{piece: null},
		]);
		expect(boardData[6][0]).toEqual({piece: 'pawn', color: 'black'});
	});

	test('should add pawns to the gameboard', () => {
		const board = new Board(),
			boardData: Array<{[key: string]: any}> = board.getBoard();

		expect(boardData[1]).toEqual([
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
			{piece: 'pawn', color: 'white'},
		]);
		expect(boardData[6][0]).toEqual({piece: 'pawn', color: 'black'});
	});

	test('should generate the back row of pieces', () => {
		const board = new Board(),
			boardData: Array<{[key: string]: any}> = board.getBoard();

		expect(boardData[0]).toEqual([
			{piece: 'rook', color: 'white'},
			{piece: 'knight', color: 'white'},
			{piece: 'bishop', color: 'white'},
			{piece: 'queen', color: 'white'},
			{piece: 'king', color: 'white'},
			{piece: 'bishop', color: 'white'},
			{piece: 'knight', color: 'white'},
			{piece: 'rook', color: 'white'},
		]);

		expect(boardData[7]).toEqual([
			{piece: 'rook', color: 'black'},
			{piece: 'knight', color: 'black'},
			{piece: 'bishop', color: 'black'},
			{piece: 'queen', color: 'black'},
			{piece: 'king', color: 'black'},
			{piece: 'bishop', color: 'black'},
			{piece: 'knight', color: 'black'},
			{piece: 'rook', color: 'black'},
		]);
	});
});
