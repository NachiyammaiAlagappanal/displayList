import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane';

const TaskPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
	><Toolbar className="header" color="heading">Tasks</Toolbar>
		<Paper
			className="TaskPane"
		><TaskPane { ...context }/></Paper>
	</Grid>;

export default TaskPaneFrame;
