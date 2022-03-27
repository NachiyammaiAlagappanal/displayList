import { rndString } from '@laufire/utils/random';

const TaskManager = {
	getTask: ({ config, data: text }) => ({
		id: rndString(config.idLength),
		text: text,
	}),

	init: (context) => context.actions.setTasks([
		TaskManager.getTask({ ...context, data: 'Task1' }),
		TaskManager.getTask({ ...context, data: 'Task2' }),
		TaskManager.getTask({ ...context, data: 'Task3' }),
	]),

};

export default TaskManager;
