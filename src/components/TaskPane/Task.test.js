import Task from './Task';
import { render, fireEvent } from '@testing-library/react';
import { random } from '@laufire/utils';

const task = {
	id: expect.any('string'),
	text: random.rndString(1),
};

const context = {
	actions: {
		addTask: jest.fn(),
		removeTask: jest.fn(),
	},
	data: task,
};

test('To check presence of addButton, task, removeButton', () => {
	const TaskList = render(Task(context)).getByRole('TaskList');

	expect(TaskList).toBeInTheDocument();
	expect(TaskList).toHaveTextContent(task.text);
});

test('remove the task, when clicked on the removeButton', () => {
	const removeButton = render(Task(context))
		.getByRole('removeButton');

	fireEvent.click(removeButton);
	expect(context.actions.removeTask)
		.toHaveBeenCalledWith(task);
	expect(removeButton).toBeInTheDocument();
});

test('remove the task and add it to the todo', () => {
	const AddButton = render(Task(context))
		.getByRole('AddButton');

	expect(AddButton).toBeInTheDocument();

	fireEvent.click(AddButton);

	expect(context.actions.addTask)
		.toHaveBeenCalledWith(task);
});
