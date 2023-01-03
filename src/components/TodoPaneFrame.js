import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TodoPane from './TodoPane';

const TodoPaneFrame = (context) =>
	<Grid item={ true } xs={ 6 } sx={ { background: '#24324bfa' } }>
		<Toolbar className="header">Todos</Toolbar>
		<Paper className="TodoPane">
			<TodoPane { ...context }/></Paper>
	</Grid>;

export default TodoPaneFrame;
