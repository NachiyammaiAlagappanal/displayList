import { render } from '@testing-library/react';
import { React } from 'react';
import ActionButton from './ActionButton.js';
import * as EditButton from './EditButton.js';
import * as AddButton from './AddButton';

describe('ActionButton based on the user Input', () => {
	test('editButton', () => {
		const text = Symbol('text');
		const context = {
			state: {
				editing: text,
			},
		};

		jest.spyOn(EditButton, 'default')
			.mockReturnValue(<div role="editButton"/>);
		const { getByRole } = render(ActionButton(context));

		expect(getByRole('editButton')).toBeInTheDocument();
		expect(EditButton.default).toHaveBeenCalledWith(context);
	});

	test('editButton', () => {
		const context = {
			state: {
				editing: null,
			},
		};

		jest.spyOn(AddButton, 'default')
			.mockReturnValue(<div role="AddButton"/>);
		const { getByRole } = render(ActionButton(context));

		expect(getByRole('AddButton')).toBeInTheDocument();
		expect(AddButton.default).toHaveBeenCalledWith(context);
	});
});
