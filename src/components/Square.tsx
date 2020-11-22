import React from 'react';
import {useDrop} from 'react-dnd';

const Square = (props: Props) => {
	const [{}, drop] = useDrop({
		accept: 'piece',
		drop: (context: {
			piece: {
				color: string;
				column: number;
				name: string;
				row: number;
			};
			type: 'piece';
		}) => {
			console.log(context);
			console.log(context.piece);
			props.moveGamePiece(
				props.row,
				props.column,
				context.piece.row,
				context.piece.column
			);
		},
	});

	return (
		<div ref={drop} className='square'>
			{props.piece}
		</div>
	);
};

type Props = {
	piece: JSX.Element | null;
	column: number;
	row: number;
	moveGamePiece: Function;
};

export default Square;
