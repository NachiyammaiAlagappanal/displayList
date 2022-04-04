/* eslint-disable no-magic-numbers */
import TodoManager from './TodoManager';
import * as random from '@laufire/utils/random';

describe('TodoManager', () => {
	const { getText, getTodosCount, getActiveCount, AddTodo,
		toggleTodo, removeTodo, toggleAll, ClearCompleted } = TodoManager;

	const randomStringOne = Symbol('string');
	const randomTextOne = Symbol('text');
	const randomStringTwo = Symbol('string');
	const randomTextTwo = Symbol('text');
	const newRandomText = Symbol('text');
	const newRandomString = Symbol('string');

	const context = {
		state: {
			todos: [
				{
					id: randomStringOne,
					text: randomTextOne,
					completed: false,
				},
				{
					id: randomStringTwo,
					text: randomTextTwo,
					completed: false,
				},
			],
		},
		config: { idLength: 16 },
		data: {
			id: newRandomString,
			text: newRandomText,
			completed: false,
		},
	};
	const existingTodos = context.state.todos;
	const [changedTodo, unChangedTodo] = existingTodos;

	test('getText', () => {
		jest.spyOn(random, 'rndString').mockReturnValue(randomStringOne);

		const result = getText({ config: { idLength: 16 },
			data: { text: newRandomText }});

		expect(result).toEqual({ id: randomStringOne,
			text: newRandomText, completed: false });
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
	});

	test('getTodosCount', () => {
		const result = getTodosCount(context.state.todos);

		expect(result).toEqual(2);
	});

	test('getActiveCount', () => {
		const result = getActiveCount(context.state.todos);

		expect(result).toEqual(2);
	});
	// describe('filters', () => {
	// 	test('all', () => {
	// 		const result = filters.all();

	// 		expect(result).toEqual(true);
	// 	});
	// });
	test('AddTodo', () => {
		jest.spyOn(TodoManager, 'getText').mockReturnValue(context.data);
		const result = AddTodo(context);

		const expectedResult = [...existingTodos, context.data];

		expect(result).toEqual(expectedResult);
	});

	test('toggleTodo', () => {
		const result = toggleTodo(existingTodos, changedTodo);

		const expectation = [{ ...changedTodo,
			completed: !changedTodo.completed }, unChangedTodo];

		expect(result).toEqual(expectation);
	});

	test('removeTodo', () => {
		const result = removeTodo(existingTodos, changedTodo);

		expect(result).toEqual([unChangedTodo]);
	});
	test('toggleAll', () => {
		const completed = true;
		const result = toggleAll(existingTodos, completed);

		expect(result).toEqual(existingTodos);
	});
	test('ClearCompleted', () => {
		const todos = [{ ...changedTodo,
			completed: !changedTodo.completed }, unChangedTodo];
		const result = ClearCompleted(todos);

		expect(result).toEqual([unChangedTodo]);
	});
});
