import { React } from 'react';
import * as TaskList from './TaskList';
import { render } from '@testing-library/react';
import TaskPane from './index';

test('Check the TaskPane execution', () => {
	const context = {
		actions: {},
		state: {
			todos: [],
		},
	};

	jest.spyOn(TaskList, 'default')
		.mockReturnValue(<div role="TaskList"/>);

	const { getByRole } = render(TaskPane(context));

	expect(TaskList.default).toHaveBeenCalledWith(context);
	expect(getByRole('TaskPane')).toBeInTheDocument();
	expect(getByRole('TaskList')).toBeInTheDocument();
	expect(getByRole('TaskPane')).toHaveTextContent('TASK');
});
