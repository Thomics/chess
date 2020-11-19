import React from 'react';
import {shallow} from 'enzyme';
import Square from './Square';

describe('Square component', () => {
	test('should render a square', () => {
		const instance = shallow(<Square />);

		expect(instance.hasClass('square')).toBeTruthy();
	});
});
