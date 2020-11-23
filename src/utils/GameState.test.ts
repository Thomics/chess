import GameState from './GameState';

describe('Gameboard container', () => {
	it('should generate a default game setup', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[2]).toEqual([
			{row: 2, column: 0, color: null, name: null},
			{row: 2, column: 1, color: null, name: null},
			{row: 2, column: 2, color: null, name: null},
			{row: 2, column: 3, color: null, name: null},
			{row: 2, column: 4, color: null, name: null},
			{row: 2, column: 5, color: null, name: null},
			{row: 2, column: 6, color: null, name: null},
			{row: 2, column: 7, color: null, name: null},
		]);
	});

	it('should add pawns to the gameboard', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[6]).toEqual([
			{row: 6, column: 0, name: 'pawn', color: 'white'},
			{row: 6, column: 1, name: 'pawn', color: 'white'},
			{row: 6, column: 2, name: 'pawn', color: 'white'},
			{row: 6, column: 3, name: 'pawn', color: 'white'},
			{row: 6, column: 4, name: 'pawn', color: 'white'},
			{row: 6, column: 5, name: 'pawn', color: 'white'},
			{row: 6, column: 6, name: 'pawn', color: 'white'},
			{row: 6, column: 7, name: 'pawn', color: 'white'},
		]);
		expect(gameData[1][0]).toEqual({
			row: 1,
			column: 0,
			name: 'pawn',
			color: 'black',
		});
	});

	it('should generate the back row of pieces', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[7]).toEqual([
			{row: 7, column: 0, name: 'rook', color: 'white'},
			{row: 7, column: 1, name: 'knight', color: 'white'},
			{row: 7, column: 2, name: 'bishop', color: 'white'},
			{row: 7, column: 3, name: 'queen', color: 'white'},
			{row: 7, column: 4, name: 'king', color: 'white'},
			{row: 7, column: 5, name: 'bishop', color: 'white'},
			{row: 7, column: 6, name: 'knight', color: 'white'},
			{row: 7, column: 7, name: 'rook', color: 'white'},
		]);

		expect(gameData[0]).toEqual([
			{row: 0, column: 0, name: 'rook', color: 'black'},
			{row: 0, column: 1, name: 'knight', color: 'black'},
			{row: 0, column: 2, name: 'bishop', color: 'black'},
			{row: 0, column: 3, name: 'queen', color: 'black'},
			{row: 0, column: 4, name: 'king', color: 'black'},
			{row: 0, column: 5, name: 'bishop', color: 'black'},
			{row: 0, column: 6, name: 'knight', color: 'black'},
			{row: 0, column: 7, name: 'rook', color: 'black'},
		]);
	});
});
