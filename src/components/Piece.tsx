import React from 'react';
import {useDrag} from 'react-dnd';

const Piece = (props: {pieceData: PieceData}) => {
	const [{isDragging}, drag] = useDrag({
		item: {type: 'piece', piece: props.pieceData},
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
			className={`chessPiece ${props.pieceData.name} ${props.pieceData.color}`}
		/>
	);
};

type PieceData = {
	name: string | null;
	color: string | null;
	column: number;
	row: number;
};

export default Piece;
