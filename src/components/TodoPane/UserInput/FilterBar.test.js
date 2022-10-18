import filterBar from './FilterBar';
import * as filterButton from './FilterButton';
import { range } from '@laufire/utils/collection';
import { render } from '@testing-library/react';
import { rndBetween, rndString } from '@laufire/utils/random';
import { React } from '.';

test('To check the filter Bar tasks', () => {
	const min = 2;
	const max = 10;
	const context = {
		config: {
			filters: range(1, rndBetween(min, max)).map(Symbol),
		},
	};

	jest.spyOn(filterButton, 'default').mockImplementation(() =>
		<div key={ rndString() } role="FilterButton"/>);

	const { getAllByRole } = render(filterBar(context));

	context.config.filters.map((filter, index) => {
		expect(filterButton.default)
			.toHaveBeenCalledWith({ ...context, data: filter });
		expect(getAllByRole('FilterButton')[index]).toBeInTheDocument();
	});
});
