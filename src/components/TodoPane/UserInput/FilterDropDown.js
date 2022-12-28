/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import { MenuItem, Select } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const FilterDropDown = (context) => {
	const { state: { filter }, actions, config } = context;

	return TodoManager.hasTodo(context) && <Select
		key={ filter }
		role="FilterButton"
		value={ filter }
		size="small"
		sx={ { marginTop: '10px', minWidth: '130px', height: '40px' } }
		onChange={ (evt) => actions.setFilter(evt.target.value) }
	                                       >
		{config.filters.map((fil) =>
			<MenuItem key={ fil } value={ fil }>
				{fil}</MenuItem>)}</Select>;
};

export default FilterDropDown;
