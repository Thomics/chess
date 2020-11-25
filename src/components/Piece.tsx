import React from 'react';
import {useDrag} from 'react-dnd';

const Piece = (props: Props) => {
	const [{isDragging}, drag] = useDrag({
		item: {type: 'piece', ...props},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<div
			ref={drag}
			style={{
				opacity: isDragging ? 0.25 : 1,
				cursor: 'move',
			}}
			className={`chessPiece ${props.piece}`}
		/>
	);
};

type Props = {
	piece: string | null;
	column: number;
	row: number;
};

export default Piece;
