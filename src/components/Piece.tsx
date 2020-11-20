import React from 'react';

const Piece = (props: {moveGamePiece: any; pieceData: any}) => (
	<div
		className={`chessPiece ${props.pieceData.name} ${props.pieceData.color}`}
		onClick={(event) => {
			props.moveGamePiece(props.pieceData);
		}}
	/>
);

export default Piece;
