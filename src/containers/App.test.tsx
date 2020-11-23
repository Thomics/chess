import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

describe('App container', () => {
	it('should render the App UI with a gameboard', () => {
		const instance = TestRenderer.create(<App />).toJSON() as any;

		expect(instance.props.className).toEqual('gameboard');
	});
});
