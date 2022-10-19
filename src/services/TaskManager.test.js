import TaskManager from './TaskManager';
import * as random from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

describe('TaskManager', () => {
	const { getTask, removeTask, addTask, init, setTask } = TaskManager;

	const randomStringOne = Symbol('string');
	const randomTextOne = Symbol('text');
	const randomStringTwo = Symbol('string');
	const randomTextTwo = Symbol('text');
	const randomTextThree = Symbol('text');

	const context = {
		state: {
			Tasks: [
				{
					id: randomStringOne,
					text: randomTextOne,
				},
				{
					id: randomStringTwo,
					text: randomTextTwo,
				},

			],
		},
		actions: {
			setTasks: jest.fn().mockReturnValue(),
		},
		config: {
			idLength: 16,
			tasks: range(0, rndBetween()).map(Symbol),
		},
		data: randomTextThree,
	};
	const existingTask = context.state.Tasks;
	const [changedTask, unChangedTask] = existingTask;

	test('getTask To get task', () => {
		jest.spyOn(random, 'rndString').mockReturnValue(randomStringOne);

		const result = getTask(context);

		expect(result).toEqual({ id: randomStringOne,
			text: randomTextThree });
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
	});
	test('removeTask - to remove the task', () => {
		const result = removeTask({ ...context, data: changedTask });

		expect(result).toEqual([unChangedTask]);
	});
	test('addTask - to add the task ', () => {
		jest.spyOn(TaskManager, 'getTask').mockReturnValue(context.data);
		const result = addTask(context);

		const expectedResult = [...existingTask, context.data];

		expect(result).toEqual(expectedResult);
	});
	test('setTasks', () => {
		const Tasks = Symbol('task');

		jest.spyOn(TaskManager, 'getTask').mockReturnValue(Tasks);

		const result = setTask(context);

		const expectation = context.config.tasks.map(() => Tasks);

		context.config.tasks.map((task) =>
			expect(TaskManager.getTask)
				.toHaveBeenCalledWith({ ...context, data: task }));

		expect(result).toEqual(expectation);
	});

	test('init - to set the randomTask', () => {
		const tasks = Symbol('tasks');

		jest.spyOn(TaskManager, 'setTask').mockReturnValue(tasks);
		init(context);

		expect(context.actions.setTasks)
			.toHaveBeenCalledWith(tasks);
	});
});
