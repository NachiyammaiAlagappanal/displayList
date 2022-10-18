import TaskList from './TaskList';
import * as Task from './Task';
import { React } from '.';
import { render } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';

test('To check the Task List display in proper manner', () => {
	const min = 2;
	const max = 10;
	const context = {
		state: {
			Tasks: range(1, rndBetween(min, max)).map(Symbol),
		},
	};

	jest.spyOn(Task, 'default').mockImplementation(() =>
		<div key={ rndString() } role="Task"/>);

	const { getAllByRole, getByRole } = render(TaskList(context));

	expect(getByRole('TaskList')).toBeInTheDocument();
	context.state.Tasks.map((task, index) => {
		expect(Task.default)
			.toHaveBeenCalledWith({ ...context, data: task });
		expect(getAllByRole('Task')[index]).toBeInTheDocument();
	});
});
