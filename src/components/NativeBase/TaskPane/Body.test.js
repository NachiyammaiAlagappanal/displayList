import { React } from 'react';
import * as TaskList from './TaskList';
import { render } from '@testing-library/react';
import Body from './Body';

test('Check the TaskPane execution', () => {
	const context = {
		actions: {},
		state: {
			todos: [],
		},
	};

	jest.spyOn(TaskList, 'default')
		.mockReturnValue(<div role="Task"/>);

	const { getByRole } = render(Body(context));

	expect(TaskList.default.mock.calls[0][0]).toEqual(context);
	expect(getByRole('TaskPane')).toBeInTheDocument();
	expect(getByRole('Task')).toBeInTheDocument();
	expect(getByRole('TaskPane')).toHaveTextContent('TASK');
});
