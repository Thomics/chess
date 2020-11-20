import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Gameboard from './Gameboard';

describe('Gameboard container', () => {
	it('should render the Gameboard UI', () => {
		const instance = shallow(<Gameboard />);

		expect(instance.hasClass('gameboard')).toBeTruthy();
	});

	it('should add pawns to the gameboard', () => {
		const wrapper = mount(<Gameboard />);
		console.log(wrapper.find('.gameboard'));
		console.log(wrapper.find('.gameboard').find('.chessboard').length);

		expect(wrapper.find('.chessboard.pawn').length).toEqual(8);
	});
});
