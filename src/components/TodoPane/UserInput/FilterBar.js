import filterButton from './FilterButton';

const filterBar = (context) => context.config.filters.map((filter) =>
	filterButton({ ...context, data: filter }));

export default filterBar;
