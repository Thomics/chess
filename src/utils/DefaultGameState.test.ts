import GameState from './DefaultGameState';

describe('Gameboard container', () => {
	it('should generate a default game setup', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[2]).toEqual([
			{row: 2, column: 0, color: null, piece: null},
			{row: 2, column: 1, color: null, piece: null},
			{row: 2, column: 2, color: null, piece: null},
			{row: 2, column: 3, color: null, piece: null},
			{row: 2, column: 4, color: null, piece: null},
			{row: 2, column: 5, color: null, piece: null},
			{row: 2, column: 6, color: null, piece: null},
			{row: 2, column: 7, color: null, piece: null},
		]);
	});

	it('should add pawns to the gameboard', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[6]).toEqual([
			{row: 6, column: 0, piece: 'pawn', color: 'white'},
			{row: 6, column: 1, piece: 'pawn', color: 'white'},
			{row: 6, column: 2, piece: 'pawn', color: 'white'},
			{row: 6, column: 3, piece: 'pawn', color: 'white'},
			{row: 6, column: 4, piece: 'pawn', color: 'white'},
			{row: 6, column: 5, piece: 'pawn', color: 'white'},
			{row: 6, column: 6, piece: 'pawn', color: 'white'},
			{row: 6, column: 7, piece: 'pawn', color: 'white'},
		]);
		expect(gameData[1][0]).toEqual({
			row: 1,
			column: 0,
			piece: 'pawn',
			color: 'black',
		});
	});

	it('should generate the back row of pieces', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[7]).toEqual([
			{row: 7, column: 0, piece: 'rook', color: 'white'},
			{row: 7, column: 1, piece: 'knight', color: 'white'},
			{row: 7, column: 2, piece: 'bishop', color: 'white'},
			{row: 7, column: 3, piece: 'queen', color: 'white'},
			{row: 7, column: 4, piece: 'king', color: 'white'},
			{row: 7, column: 5, piece: 'bishop', color: 'white'},
			{row: 7, column: 6, piece: 'knight', color: 'white'},
			{row: 7, column: 7, piece: 'rook', color: 'white'},
		]);

		expect(gameData[0]).toEqual([
			{row: 0, column: 0, piece: 'rook', color: 'black'},
			{row: 0, column: 1, piece: 'knight', color: 'black'},
			{row: 0, column: 2, piece: 'bishop', color: 'black'},
			{row: 0, column: 3, piece: 'queen', color: 'black'},
			{row: 0, column: 4, piece: 'king', color: 'black'},
			{row: 0, column: 5, piece: 'bishop', color: 'black'},
			{row: 0, column: 6, piece: 'knight', color: 'black'},
			{row: 0, column: 7, piece: 'rook', color: 'black'},
		]);
	});
});
