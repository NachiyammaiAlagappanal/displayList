import { React } from 'react';
import FilterDropDown from './FilterDropDown.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Box } from '@mui/material';

const Fields = [ToggleAllButton, TodoInput, ActionButton];

const TodoInputs = (context) =>
	<Box 	sx={ { display: 'grid',
		gridTemplateColumns: 'auto auto 20%' } }
	>{
			Fields.map((Component, field) =>
				renderItem({ ...context })(Component, field))
		}</Box>;

const userInputs = [TodoInputs, FilterDropDown];

const UserInputs = (context) =>
	<Box
		role="UserInput"
		sx={ { display: 'grid',
			gridTemplateColumns: '70% 30%' } }
	>
		{userInputs.map((Component, field) =>
			<Box
				key={ field }
			>
				{renderItem({ ...context })(Component, field)}</Box>)}
	</Box>;

export default UserInputs;
