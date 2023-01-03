import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane';

const TaskPaneFrame = (context) =>
	<Grid
		item={ true }
		md={ 6 }
		xs={ 12 }
		sx={ { backgroundColor: '#149387' } }
	><Toolbar className="header" sx={ { color: '#96967b' } }>Tasks</Toolbar>
		<Paper
			className="TaskPane"
		><TaskPane { ...context }/></Paper>
	</Grid>;

export default TaskPaneFrame;
