import { Box, Paper } from '@mui/material';
import { React } from 'react';
import TaskList from './TaskList';

const Body = (context) =>
	<Box
		role="TaskPane"
		className="column"
		sx={ { width: '100%' } }
	>
		<Paper elevation={ 12 } sx={ { boxShadow: 'inherit' } }>
			<Box><TaskList { ...context }/></Box></Paper>
	</Box>;

export default Body;
