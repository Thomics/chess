import React from 'react';

const Square = (props: {piece: any | null; row: string; column: string}) => (
	<div className='square'>{props.piece}</div>
);

export default Square;
