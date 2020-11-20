import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Gameboard from './Gameboard';

describe('Gameboard container', () => {
	it('should render the Gameboard UI', () => {
		const instance = shallow(<Gameboard />);

		expect(instance.hasClass('gameboard')).toBeTruthy();
	});
});
