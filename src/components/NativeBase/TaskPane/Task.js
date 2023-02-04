/* eslint-disable max-lines-per-function */
import { Box, Button, Divider, HStack, Stack } from 'native-base';
import { React } from 'react';

const AddTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="AddButton"
			onPress={ () => { context.actions.addTodo(task.text);	} }
			variant="unstyled"
		>
			+
		</Button>
	);
};

const RemoveButton = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="removeButton"
			variant="unstyled"
			onClick={ () => context.actions.removeTask(task) }
		>
			x</Button>
	);
};

const Task = (context) => {
	const { data: { id, text }} = context;

	return (
		<Stack>
			<HStack
				key={ id }
				role="Task"
			><Box><AddTaskToTodo { ...context }/></Box>
				<Box
					style={ { width: '79%', display: 'inline-block' } }
					color="text.contrast"
				>{text}</Box>
				<Box component="span"><RemoveButton { ...context }/></Box>
			</HStack><Divider/></Stack>);
};

export default Task;
