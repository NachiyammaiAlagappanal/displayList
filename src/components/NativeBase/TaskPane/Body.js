import { Paper } from '@mui/material';
import { Box } from 'native-base';
import { React } from 'react';
import TaskList from './TaskList';

const Body = (context) =>
	<Box
		role="TaskPane"
		style={ { width: '100%', display: 'flex',
			flexDirection: 'column' } }
	>
		<Paper elevation={ 12 } sx={ { boxShadow: 'inherit' } }>
			<Box><TaskList { ...context }/></Box></Paper>
	</Box>;

export default Body;
