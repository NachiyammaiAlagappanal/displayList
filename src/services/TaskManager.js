import { rndString } from '@laufire/utils/random';
import TaskBackend from './TaskBackend';

const TaskManager = {
	getTask: ({ config, data }) => ({
		id: rndString(config.idLength),
		text: data,
	}),

	setTask: (context) => context.config.tasks.map((task) =>
		TaskManager.getTask({ ...context, data: task })),

	init: (context) =>
		context.actions.setTasks(TaskManager.setTask(context)),

	removeTask: ({ state: { Tasks }, data }) =>
		Tasks.filter((task) => task.id !== data.id),

	addTask: async (context) => {
		const newTask = await TaskBackend.getTask();

		context.actions.addTask(newTask);
	},

};

export default TaskManager;
