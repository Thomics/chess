import React from 'react';
import TestRenderer from 'react-test-renderer';
import Gameboard from './Gameboard';

describe('Gameboard container', () => {
	it('should render the Gameboard UI', () => {
		const instance = TestRenderer.create(<Gameboard />).toJSON() as any;

		expect(instance.props.className).toEqual('gameboard');
	});

	it('should render the Gameboard squares', () => {
		const instance = TestRenderer.create(<Gameboard />).toJSON() as any;

		expect(instance.children[0].props.className).toEqual('square');
		expect(instance.children[63].props.className).toEqual('square');
	});

	it('should render the Gameboard pieces', () => {
		const instance = TestRenderer.create(<Gameboard />).toJSON() as any;

		expect(instance.children[0].children[0].props.className).toEqual(
			'chessPiece blackRook'
		);

		expect(instance.children[57].children[0].props.className).toEqual(
			'chessPiece whiteKnight'
		);

		expect(instance.children[49].children[0].props.className).toEqual(
			'chessPiece whitePawn'
		);
	});
});
