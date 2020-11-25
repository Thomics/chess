import GameState from './DefaultGameState';

describe('Gameboard container', () => {
	it('should generate a default game setup', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[2]).toEqual([
			{row: 2, column: 0, piece: null},
			{row: 2, column: 1, piece: null},
			{row: 2, column: 2, piece: null},
			{row: 2, column: 3, piece: null},
			{row: 2, column: 4, piece: null},
			{row: 2, column: 5, piece: null},
			{row: 2, column: 6, piece: null},
			{row: 2, column: 7, piece: null},
		]);
	});

	it('should add pawns to the gameboard', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[6]).toEqual([
			{row: 6, column: 0, piece: 'whitePawn'},
			{row: 6, column: 1, piece: 'whitePawn'},
			{row: 6, column: 2, piece: 'whitePawn'},
			{row: 6, column: 3, piece: 'whitePawn'},
			{row: 6, column: 4, piece: 'whitePawn'},
			{row: 6, column: 5, piece: 'whitePawn'},
			{row: 6, column: 6, piece: 'whitePawn'},
			{row: 6, column: 7, piece: 'whitePawn'},
		]);
		expect(gameData[1][0]).toEqual({
			row: 1,
			column: 0,
			piece: 'blackPawn',
		});
	});

	it('should generate the back row of pieces', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[7]).toEqual([
			{row: 7, column: 0, piece: 'whiteRook'},
			{row: 7, column: 1, piece: 'whiteKnight'},
			{row: 7, column: 2, piece: 'whiteBishop'},
			{row: 7, column: 3, piece: 'whiteQueen'},
			{row: 7, column: 4, piece: 'whiteKing'},
			{row: 7, column: 5, piece: 'whiteBishop'},
			{row: 7, column: 6, piece: 'whiteKnight'},
			{row: 7, column: 7, piece: 'whiteRook'},
		]);

		expect(gameData[0]).toEqual([
			{row: 0, column: 0, piece: 'blackRook'},
			{row: 0, column: 1, piece: 'blackKnight'},
			{row: 0, column: 2, piece: 'blackBishop'},
			{row: 0, column: 3, piece: 'blackQueen'},
			{row: 0, column: 4, piece: 'blackKing'},
			{row: 0, column: 5, piece: 'blackBishop'},
			{row: 0, column: 6, piece: 'blackKnight'},
			{row: 0, column: 7, piece: 'blackRook'},
		]);
	});
});
