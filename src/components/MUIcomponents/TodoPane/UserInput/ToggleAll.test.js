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
		jest.spyOn(TodoManager, 'hasTodo').mockReturnValue(false);

		const checkBox = ToggleAllButton(context);

		expect(TodoManager.hasTodo).toHaveBeenCalledWith(context);
		expect(checkBox).toEqual(false);
	});

	test('when ToggleAllButton is not displayed', () => {
		jest.spyOn(TodoManager, 'hasTodo').mockReturnValue(true);

		const checkBox = render(ToggleAllButton(context)).getByRole('checkBox');

		expect(TodoManager.hasTodo).toHaveBeenCalledWith(context);
		expect(checkBox).toBeInTheDocument();
	});

	test('when CheckBox is selected and unSelected ', () => {
		const isSelected = rndValue([true, false]);

		jest.spyOn(TodoManager, 'hasTodo').mockReturnValue(true);
		jest.spyOn(TodoManager, 'hasActiveTodo').mockReturnValue(isSelected);

		const checkBox = render(ToggleAllButton(context)).getByRole('checkBox');

		fireEvent.click(checkBox);

		expect(TodoManager.hasActiveTodo).toHaveBeenCalledWith(context);
		expect(context.actions.toggleAll).toHaveBeenCalledWith(!isSelected);
	});
});
