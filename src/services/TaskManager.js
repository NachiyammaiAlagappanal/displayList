import { rndString } from '@laufire/utils/random';

const TaskManager = {
	getTask: ({ config, data }) => ({
		id: rndString(config.idLength),
		text: data,
	}),

	init: (context) =>
		context.actions.setTasks(context.config.tasks.map((task) =>
			TaskManager.getTask({ ...context, data: task })),),

	removeTask: ({ state: { Tasks }, data }) =>
		Tasks.filter((task) => task.id !== data.id),

	addTask: (context) =>
		context.state.Tasks.concat(TaskManager.getTask(context)),

};

export default TaskManager;
