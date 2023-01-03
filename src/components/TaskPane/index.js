import { Box } from '@mui/material';
import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<Box
		role="TaskPane"
		className="column"
		sx={ { alignItems: 'center' } }
	>
		<Box><TaskList { ...context }/></Box>

	</Box>;

export default TaskPane;
