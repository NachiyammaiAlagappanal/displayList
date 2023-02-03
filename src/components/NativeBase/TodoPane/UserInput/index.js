import { React } from 'react';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';
import { Paper } from '@mui/material';
import { Box } from 'native-base';

const userInputs = [ToggleAllButton, TodoInput, ActionButton];

const UserInputs = (context) =>
	<Paper
		elevation={ 12 }
	>
		<Box
			role="UserInput"
			display="flex"
			flexDirection="row"
			alignItems="center"
		>{userInputs.map((Component, field) =>
				renderItem({ ...context })(Component, field))}
		</Box></Paper>;

export default UserInputs;
