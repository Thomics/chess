export default class GameMoveManager {
	gameState: Array<Array<GameDataType>>;

	constructor(gameState: Array<Array<GameDataType>>) {
		this.gameState = gameState;
	}

	// movePiece(
	// 	originRow: number,
	// 	originColumn: number,
	// 	destinationRow: number,
	// 	destinationColumn: number
	// ) {
	// 	this.gameState[destinationRow][destinationColumn] = this.gameState[
	// 		originRow
	// 	][originColumn];

	// 	this.gameState[originRow][originColumn] = null;
	// }
}

type GameDataType = {
	name: string | null;
	color: string | null;
	row: number;
	column: number;
};
