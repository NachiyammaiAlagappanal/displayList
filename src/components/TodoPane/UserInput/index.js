import { React } from 'react';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Box, Paper } from '@mui/material';

const userInputs = [ToggleAllButton, TodoInput, ActionButton];

const UserInputs = (context) =>
	<Paper
		elevation={ 12 }
		sx={ { boxShadow: 'none', borderRadius: 'inherit' } }
	>
		<Box
			role="UserInput"
			className="center"
		>{userInputs.map((Component, field) =>
				renderItem({ ...context })(Component, field))}
		</Box></Paper>;

export default UserInputs;
