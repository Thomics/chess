import React from 'react';
import TestRenderer from 'react-test-renderer';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import Square from './Square';

describe('Square component', () => {
	test('should render a square', () => {
		const instance = TestRenderer.create(
			<DndProvider backend={HTML5Backend}>
				<Square
					piece={null}
					column={0}
					row={0}
					moveGamePiece={() => {}}
				/>
			</DndProvider>
		).toJSON() as any;

		expect(instance.props.className).toEqual('square');
	});
});
