import React from 'react';
import {useDrop} from 'react-dnd';

const Square = (props: Props) => {
	const drop = useDrop({
		accept: 'piece',
		drop: (origin: OriginData) => {
			props.moveGamePiece(
				origin.row,
				origin.column,
				props.row,
				props.column
			);
		},
	});

	return (
		<div ref={drop[1]} className='square'>
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

type OriginData = {
	color: string;
	column: number;
	name: string;
	row: number;
	type: 'piece';
};

export default Square;
