import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TodoPane from './TodoPane';

const TodoPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { background: '#1EC895' } }
	>
		<Toolbar className="header" sx={ { color: '#0f6a4e' } }>Todos</Toolbar>
		<Paper className="TodoPane" sx={ { background: '#0B0629' } }>
			<TodoPane { ...context }/></Paper>
	</Grid>;

export default TodoPaneFrame;
