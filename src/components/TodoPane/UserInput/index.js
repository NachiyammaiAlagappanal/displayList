import { React } from 'react';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Box } from '@mui/material';

const userInputs = [ToggleAllButton, TodoInput, ActionButton];

const UserInputs = (context) =>
	<Box
		role="UserInput"
		className="center"
	>
		{userInputs.map((Component, field) =>
			<Box
				key={ field }
			>
				{renderItem({ ...context })(Component, field)}</Box>)}
	</Box>;

export default UserInputs;
