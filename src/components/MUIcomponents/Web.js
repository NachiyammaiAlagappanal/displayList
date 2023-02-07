import { Grid } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane';
import TodoPane from './TodoPane';

const Web = (context) => <Grid container={ true } sx={ { height: '100vh' } }>
	<TaskPane { ...context }/>
	<TodoPane { ...context }/>
</Grid>;

export default Web;
