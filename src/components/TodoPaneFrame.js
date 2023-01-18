import { Grid, Toolbar } from '@mui/material';
import { React } from 'react';
import TodoPane from './TodoPane';

const Header = () =>
	<Toolbar
		className="header"
		sx={ { color: 'heading.main' } }
	>
		todos</Toolbar>;

const TodoPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { backgroundColor: 'background.default' } }
	>
		<Header { ...context }/>
		<TodoPane { ...context }/>
	</Grid>;

export default TodoPaneFrame;
