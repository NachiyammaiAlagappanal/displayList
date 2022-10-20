import FilterButton from './FilterButton';
import { React } from 'react';

const FilterBar = (context) => context.config.filters.map((filter, index) =>
	<FilterButton key={ index }{ ...{ ...context, data: filter } }/>);

export default FilterBar;
