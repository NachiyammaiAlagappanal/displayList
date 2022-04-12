import TaskList from './TaskList';
import * as Task from './Task';
import { React } from '.';
import { render } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

test('To check the Task List display in proper manner', () => {
	const context = {
		state: {
			Tasks: range(1, rndBetween).map(Symbol),
		},
	};

	jest.spyOn(Task, 'default').mockReturnValue(<div role="Task"/>);

	const { getAllByRole } = render(TaskList(context));

	context.state.Tasks.map((task, index) => {
		expect(Task.default)
			.toHaveBeenCalledWith({ ...context, data: task });
		expect(getAllByRole('TaskList')[index]).toBeInTheDocument();
	});
});
