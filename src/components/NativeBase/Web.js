import { Grid } from '@mui/material';
import { React } from 'react';
import TaskPaneFrame from './TaskPaneFrame';
import TodoPaneFrame from './TodoPaneFrame';

const Frame = (context) => <Grid container={ true } sx={ { height: '100vh' } }>
	<TaskPaneFrame { ...context }/>
	<TodoPaneFrame { ...context }/>
</Grid>;

export default Frame;