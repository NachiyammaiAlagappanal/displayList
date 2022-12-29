import { Box, Toolbar } from '@mui/material';
import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<Box
		role="TaskPane"
	>
		<Toolbar>TASK</Toolbar>
		<Box><TaskList { ...context }/></Box>

	</Box>;

export default TaskPane;
