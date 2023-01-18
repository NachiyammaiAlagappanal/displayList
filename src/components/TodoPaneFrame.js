import { Grid, Toolbar } from '@mui/material';
import { React } from 'react';
import TodoPane from './TodoPane';
// import ThemeDropDown from '../Theme/ThemeDropDown';

const Header = () =>
	<Grid container={ true }>
		<Grid xs={ 12 }>
			<Toolbar
				className="header"
				sx={ { color: 'heading.main' } }
			>
				Todos</Toolbar></Grid>
	</Grid>;

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
