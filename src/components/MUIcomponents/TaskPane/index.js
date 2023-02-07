import { Grid, Toolbar } from '@mui/material';
import { React } from 'react';
import Body from './Body';

const TaskPane = (context) =>
	<Grid
		item={ true }
		xs={ 12 }
		md={ 6 }
		sm={ 6 }
		sx={ { backgroundColor: 'background.default', rowGap: '20px' } }
		overflow="scroll"
	>
		<Toolbar
			className="header"
			sx={ { color: 'heading.main' } }
		>tasks</Toolbar>
		<Body { ...context }/>
	</Grid>;

export default TaskPane;
