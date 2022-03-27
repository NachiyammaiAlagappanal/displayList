import { rndString } from '@laufire/utils/random';

const getTask = ({ config }, text) => ({
	id: rndString(config.idLength),
	text: text,
});

const TaskManager = (context) => ({
	init: () => context.actions.setTasks([
		getTask('Task1'),
		getTask('Task1'),
		getTask('Task1'),
	]),
});

export default TaskManager;
