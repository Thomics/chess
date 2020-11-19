import React from 'react';
import {shallow} from 'enzyme';
import Gameboard from './Gameboard';

describe('Gameboard container', () => {
	test('should render the Gameboard UI', () => {
		const instance = shallow(<Gameboard />);

		expect(instance.hasClass('gameboard')).toBeTruthy();
	});
});
