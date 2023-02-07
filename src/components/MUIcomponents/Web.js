import { Grid } from '@mui/material';
import { React } from 'react';
import TaskPane from './TaskPane/Body';
import TodoPane from './TodoPane';

const Frame = (context) => <Grid container={ true } sx={ { height: '100vh' } }>
	<TaskPane { ...context }/>
	<TodoPane { ...context }/>
</Grid>;

export default Frame;
