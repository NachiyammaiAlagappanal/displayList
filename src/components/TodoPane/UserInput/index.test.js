import { React } from 'react';
import * as ClearButton from './ClearButton.js';
import * as FilterBar from './FilterBar.js';
import * as TodoInput from './TodoInput.js';
import * as ToggleAllButton from './ToggleAllButton.js';
import * as ActionButton from './ActionButton.js';
import UserInput from './index';
import { render } from '@testing-library/react';

test('UserInput', () => {
	const context = {
		state: {
			input: Symbol('input'),
		},
	};

	jest.spyOn(ClearButton, 'default')
		.mockReturnValue(<div role="ClearCompleted"/>);
	jest.spyOn(FilterBar, 'default')
		.mockReturnValue(<div role="FilterButton"/>);
	jest.spyOn(TodoInput, 'default')
		.mockReturnValue(<div role="textBox"/>);
	jest.spyOn(ToggleAllButton, 'default')
		.mockReturnValue(<div role="checkbox"/>);
	jest.spyOn(ActionButton, 'default')
		.mockReturnValue(<div role="ActionButton"/>);

	const { getByRole } = render(UserInput(context));

	expect(getByRole('UserInput')).toBeInTheDocument();

	expect(getByRole('ClearCompleted')).toBeInTheDocument();
	expect(ClearButton.default.mock.calls[0][0]).toEqual(context);

	expect(getByRole('FilterButton')).toBeInTheDocument();
	expect(FilterBar.default.mock.calls[0][0]).toEqual(context);

	expect(getByRole('textBox')).toBeInTheDocument();
	expect(TodoInput.default.mock.calls[0][0]).toEqual(context);

	expect(getByRole('checkbox')).toBeInTheDocument();
	expect(ToggleAllButton.default.mock.calls[0][0])
		.toEqual(context);

	expect(getByRole('ActionButton')).toBeInTheDocument();
	expect(ActionButton.default.mock.calls[0][0]).toEqual(context);
});
