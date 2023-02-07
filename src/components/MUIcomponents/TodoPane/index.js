import { Grid, Toolbar } from '@mui/material';
import { React } from 'react';
import Body from './Body';

const Header = () =>
	<Toolbar
		className="header"
		sx={ { color: 'heading.main' } }
	>
		todos</Toolbar>;

const TodoPane = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { backgroundColor: 'background.default', rowGap: '20px',
			height: '100vh' } }
		overflow="scroll"
	>
		<Header { ...context }/>
		<Body { ...context }/>
	</Grid>;

export default TodoPane;
