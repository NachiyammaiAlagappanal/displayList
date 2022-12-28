import { React } from 'react';
import FilterDropDown from './FilterDropDown.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Box } from '@mui/material';

const Fields = [TodoInput, ActionButton, ToggleAllButton];

const TodoInputs = (context) =>
	Fields.map((Component, field) =>
		renderItem({ ...context })(Component, field));

const userInputs = [TodoInputs, FilterDropDown];

const UserInputs = (context) =>
	<Box
		role="UserInput"
		sx={ { margin: '10px', display: 'grid',
			gridTemplateColumns: '80% 20%' } }
	>
		{userInputs.map((Component, field) =>
			<Box
				key={ field }
			>
				{renderItem({ ...context })(Component, field)}</Box>)}
	</Box>;

export default UserInputs;
