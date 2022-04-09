import ToggleAllButton from './ToggleAllButton';
import TodoManager from '../../../services/TodoManager';
import { render, fireEvent } from '@testing-library/react';
import { rndValue } from '@laufire/utils/random';

const context = {
	actions: {
		toggleAll: jest.fn(),
	},
	state: {
		todos: [],
	},
};

describe('ToggleAllButton - availability Check', () => {
	test('when ToggleAllButton is not displayed', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(true);

		const checkBox = ToggleAllButton(context);

		expect(TodoManager.hasNoTodos).toHaveBeenCalledWith(context);
		expect(checkBox).not.toBeInTheDocument();
	});

	test('when ToggleAllButton is not displayed', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);

		const checkBox = render(ToggleAllButton(context)).getByRole('checkBox');

		expect(TodoManager.hasNoTodos).toHaveBeenCalledWith(context);
		expect(checkBox).toBeInTheDocument();
	});

	test('when CheckBox is selected and unSelected ', () => {
		const isSelected = rndValue([true, false]);

		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);
		jest.spyOn(TodoManager, 'hasActiveCount').mockReturnValue(isSelected);

		const checkBox = render(ToggleAllButton(context)).getByRole('checkBox');

		fireEvent.click(checkBox);

		expect(TodoManager.hasActiveCount).toHaveBeenCalledWith(context);
		expect(context.actions.toggleAll).toHaveBeenCalledWith(!isSelected);
	});
});
