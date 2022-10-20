import FilterButton from './FilterButton';

// TODO: use component style

const FilterBar = (context) => context.config.filters.map((filter) =>
	FilterButton({ ...context, data: filter }));

export default FilterBar;
