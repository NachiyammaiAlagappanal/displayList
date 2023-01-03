import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane';
import TodoPane from './TodoPane';

const TodoPaneFrame = (context) =>
	<Grid item={ true } xs={ 6 } sx={ { background: '#24324bfa' } }>
		<Toolbar className="header">Todos</Toolbar>
		<Paper className="TodoPane">
			<TodoPane { ...context }/></Paper>
	</Grid>;
const TaskPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 6 }
		sx={ { backgroundColor: '#149387' } }
	><Toolbar className="header" sx={ { color: '#96967b' } }>Tasks</Toolbar>
		<Paper
			className="TaskPane"
		><TaskPane { ...context }/></Paper>
	</Grid>;

const Frame = (context) => <Grid container={ true } sx={ { height: '100vh' } }>
	<TodoPaneFrame { ...context }/>
	<TaskPaneFrame { ...context }/>
</Grid>;

export default Frame;
