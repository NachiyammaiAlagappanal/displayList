import { rndString } from '@laufire/utils/random';

const tasks = ['Task1', 'Task2', 'Task3'];

const TaskManager = {
	getTask: ({ config, data: text }) => ({
		id: rndString(config.idLength),
		text: text,
	}),

	init: (context) => context.actions.setTasks(tasks.map((task) =>
		TaskManager.getTask({ ...context, data: task })),),

	removeTask: (Tasks, data) => Tasks.filter((task) => task.id !== data.id),

	AddTask: (context) =>
		context.state.Tasks.concat(TaskManager.getTask(context)),

};

export default TaskManager;
