import { React } from 'react';
import context from '../core/context.js';

const filterButton = (filter) =>
	<button
		onClick={ () => context.actions.setFilter(filter) }
	>{ filter }</button>;

const filterBar = () =>
	context.config.filters.map(filterButton);

export default filterBar;
