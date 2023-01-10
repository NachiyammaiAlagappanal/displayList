import { Grid, Paper, Toolbar } from '@mui/material';
import { React } from 'react';
import TodoPane from './TodoPane';
import ThemeDropDown from '../Theme/ThemeDropDown';

const TodoPaneFrame = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { backgroundColor: 'background.default' } }
	>
		<Grid container={ true } justifyContent="space-between">
			<Grid xs={ 10 }>
				<Toolbar className="header" sx={ { color: 'heading.main' } }>
					Todos</Toolbar></Grid>
			<Grid xs={ 2 }>
				<ThemeDropDown { ...context }/></Grid></Grid>
		<Paper className="TodoPane">
			<TodoPane { ...context }/></Paper>
	</Grid>;

export default TodoPaneFrame;
