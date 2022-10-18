import TaskManager from './TaskManager';
import * as random from '@laufire/utils/random';

describe('TaskManager', () => {
	const { getTask, removeTask, addTask } = TaskManager;

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
		config: {
			idLength: 16,
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
});
