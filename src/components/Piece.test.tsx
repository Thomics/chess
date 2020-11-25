import React from 'react';
import TestRenderer from 'react-test-renderer';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import Piece from './Piece';

describe('Piece component', () => {
	test('should render a white pawn piece', () => {
		const instance = TestRenderer.create(
			<DndProvider backend={HTML5Backend}>
				<Piece piece={'pawn'} color={'white'} column={0} row={6} />
			</DndProvider>
		).toJSON() as any;

		expect(instance.props.className).toEqual('chessPiece pawn white');
	});

	test('should render a black king piece', () => {
		const instance = TestRenderer.create(
			<DndProvider backend={HTML5Backend}>
				<Piece piece={'king'} color={'black'} column={4} row={0} />
			</DndProvider>
		).toJSON() as any;

		expect(instance.props.className).toEqual('chessPiece king black');
	});
});
