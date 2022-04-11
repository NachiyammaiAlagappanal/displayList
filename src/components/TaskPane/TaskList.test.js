import TaskList from './TaskList';
import * as Task from './Task';
import { React } from '.';
import { render } from '@testing-library/react';

test('To check the Task List display in proper manner', () => {
	const context = {
		state: {
			Tasks: [],
		},
	};

	jest.spyOn(Task, 'default').mockReturnValue(<div role="TaskList"/>);

	const { getAllByRole } = render(TaskList(context));

	context.state.Tasks.map((task, index) => {
		expect(Task.default)
			.toHaveBeenCalledWith({ ...context, data: task });
		expect(getAllByRole('ListOfTasks')[index]).toBeInTheDocument();
	});
});
