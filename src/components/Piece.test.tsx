import React from 'react';
import TestRenderer from 'react-test-renderer';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import Piece from './Piece';

describe('Piece component', () => {
	it('should render a white pawn piece', () => {
		const instance = TestRenderer.create(
			<DndProvider backend={HTML5Backend}>
				<Piece piece={'whitePawn'} column={0} row={6} />
			</DndProvider>
		).toJSON() as any;

		expect(instance.props.className).toEqual('chessPiece whitePawn');
	});

	it('should render a black king piece', () => {
		const instance = TestRenderer.create(
			<DndProvider backend={HTML5Backend}>
				<Piece piece={'blackKing'} column={4} row={0} />
			</DndProvider>
		).toJSON() as any;

		expect(instance.props.className).toEqual('chessPiece blackKing');
	});
});
