import GameState from './GameState';

describe('Gameboard container', () => {
	test('should generate a default game setup', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[2]).toEqual([
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
		]);
		expect(gameData[6][0]).toEqual({name: 'pawn', color: 'black'});
	});

	test('should add pawns to the gameboard', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[1]).toEqual([
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
			{name: 'pawn', color: 'white'},
		]);
		expect(gameData[6][0]).toEqual({name: 'pawn', color: 'black'});
	});

	test('should generate the back row of pieces', () => {
		const gameState = new GameState(),
			gameData: Array<{
				[key: string]: any;
			}> = gameState.getDefaultGameData();

		expect(gameData[0]).toEqual([
			{name: 'rook', color: 'white'},
			{name: 'knight', color: 'white'},
			{name: 'bishop', color: 'white'},
			{name: 'queen', color: 'white'},
			{name: 'king', color: 'white'},
			{name: 'bishop', color: 'white'},
			{name: 'knight', color: 'white'},
			{name: 'rook', color: 'white'},
		]);

		expect(gameData[7]).toEqual([
			{name: 'rook', color: 'black'},
			{name: 'knight', color: 'black'},
			{name: 'bishop', color: 'black'},
			{name: 'queen', color: 'black'},
			{name: 'king', color: 'black'},
			{name: 'bishop', color: 'black'},
			{name: 'knight', color: 'black'},
			{name: 'rook', color: 'black'},
		]);
	});
});
