import React from 'react';

export default (props: {name: string; color: string; moveGamePiece: any}) => (
	<div
		className={`chessPiece ${props.name} ${props.color}`}
		onClick={() => {
			console.log('bad?');
			props.moveGamePiece();
		}}
	/>
);
