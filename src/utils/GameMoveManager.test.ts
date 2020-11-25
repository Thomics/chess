import GameMoveManager from './GameMoveManager';
import GameState from './DefaultGameState';

describe('GameMoverManager class', () => {
	xit('should be constructed with a gameboard array', () => {
		const gameState = getBaseGameState(),
			moveManager = new GameMoveManager(gameState);

		expect(moveManager.gameState).toEqual(gameState);
	});

	xit('should update pawn piece location from row 6 to row 4', () => {
		const gameState = getBaseGameState(),
			moveManager = new GameMoveManager(gameState);

		expect(moveManager.gameState[6][0].name).toEqual('pawn');
		expect(moveManager.gameState[4][0]).toEqual(null);

		moveManager.movePiece(6, 0, 4, 0);

		expect(moveManager.gameState[6][0]).toEqual(null);
		expect(moveManager.gameState[4][0].name).toEqual('pawn');
	});
});

const getBaseGameState = () => new GameState().getDefaultGameData();
