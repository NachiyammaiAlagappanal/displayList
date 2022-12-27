import { React } from 'react';
import ClearButton from './ClearButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Box } from '@mui/material';

const Fields = [ToggleAllButton, TodoInput, ActionButton];

const TodoInputs = (context) =>
	Fields.map((Component, field) =>
		renderItem({ ...context })(Component, field));

const userInputs = [TodoInputs, ClearButton, FilterBar];

const UserInputs = (context) =>
	<Box role="UserInput">
		{userInputs.map((Component, field) =>
			<Box key={ field }>
				{renderItem({ ...context })(Component, field)}</Box>)}
	</Box>;

export default UserInputs;
