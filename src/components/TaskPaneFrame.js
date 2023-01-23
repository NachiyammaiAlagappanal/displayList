import { Grid, Toolbar } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane';

const TaskPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { backgroundColor: 'background.default', rowGap: '20px' } }
	>
		<Toolbar
			className="header"
			sx={ { color: 'heading.main' } }
		>tasks</Toolbar>
		<TaskPane { ...context }/>
	</Grid>;

export default TaskPaneFrame;
