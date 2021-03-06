import TodoManager from './TodoManager';
import * as random from '@laufire/utils/random';

describe('TodoManager', () => {
	const { getText, getTodosCount, getActiveCount, AddTodo,
		toggleTodo, removeTodo, toggleAll, ClearCompleted,
		hasActiveCount, filterTodos, hasNoTodos, editTodo } = TodoManager;

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

	test('getText - to get the Text', () => {
		jest.spyOn(random, 'rndString').mockReturnValue(randomStringOne);

		const result = getText({ config: { idLength: 16 },
			data: { text: newRandomText }});

		expect(result).toEqual({ id: randomStringOne,
			text: newRandomText, completed: false });
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
	});

	test('getTodosCount To check the todos count', () => {
		const result = getTodosCount(context.state.todos);

		expect(result).toEqual(existingTodos.length);
	});

	test('getActiveCount to check the active todos count', () => {
		const result = getActiveCount(context.state.todos);

		expect(result).toEqual(existingTodos.length);
	});
	test('AddTodo - adding the Todos', () => {
		jest.spyOn(TodoManager, 'getText').mockReturnValue(context.data);
		const result = AddTodo(context);

		const expectedResult = [...existingTodos, context.data];

		expect(result).toEqual(expectedResult);
	});

	test('toggleTodo = toggle the todos', () => {
		const result = toggleTodo(existingTodos, changedTodo);

		const expectation = [{ ...changedTodo,
			completed: !changedTodo.completed }, unChangedTodo];

		expect(result).toEqual(expectation);
	});

	test('removeTodo - remove the todo', () => {
		const result = removeTodo(existingTodos, changedTodo);

		expect(result).toEqual([unChangedTodo]);
	});
	test('toggleAll - to toggleAll the todos', () => {
		const completed = true;
		const result = toggleAll(existingTodos, completed);

		expect(result).toEqual(existingTodos);
	});
	test('ClearCompleted -  clearing the completed todos', () => {
		const todos = [{ ...changedTodo,
			completed: !changedTodo.completed }, unChangedTodo];
		const result = ClearCompleted(todos);

		expect(result).toEqual([unChangedTodo]);
	});

	describe('ActiveCountCheck - To count the Active Todos', () => {
		test('hasActiveCount FalseCondition', () => {
			const result = hasActiveCount(context);

			expect(result).toEqual(false);
		});
		test('hasActiveCount TrueCondition', () => {
			const ModifiedContext = {
				state: {
					todos: [{ ...existingTodos,
						completed: !existingTodos.completed }],
				},
			};

			const result = hasActiveCount(ModifiedContext);

			expect(result).toEqual(true);
		});
	});

	describe('all - filter all todos', () => {
		test('filteringAllTodos', () => {
			const state = {
				...context.state,
				filter: 'all',
			};
			const result = filterTodos({ state });

			expect(result).toEqual(context.state.todos);
		});
		test('Active - filtering the active todos', () => {
			const ModifiedContext = {
				state: {
					todos: [{ ...changedTodo,
						completed: !changedTodo.completed }, unChangedTodo],
					filter: 'active',
				},
			};
			const result = filterTodos(ModifiedContext);

			expect(result).toEqual([unChangedTodo]);
		});
		test('completed - filtering the completedTodos', () => {
			const ModifiedContext = {
				state: {
					todos: [{ ...changedTodo,
						completed: !changedTodo.completed }, unChangedTodo],
					filter: 'completed',
				},
			};
			const expectation = [{ ...changedTodo,
				completed: !changedTodo.completed }];
			const result = filterTodos(ModifiedContext);

			expect(result).toEqual(expectation);
		});
	});

	describe('TodosCountCheck - to check the count of active Todos', () => {
		test('hasNoTodos FalseCondition', () => {
			const result = hasNoTodos(context);

			expect(result).toEqual(false);
		});
		test('hasNoTodos TrueCondition', () => {
			const ModifiedContext = {
				state: {
					todos: [],
				},
			};
			const result = hasNoTodos(ModifiedContext);

			expect(result).toEqual(true);
		});
	});
	test('editing the Todo', () => {
		const data = 'Hi';
		const result = editTodo(
			existingTodos, changedTodo, data
		);
		const expectation = [{ ...changedTodo,
			text: data }, unChangedTodo];

		expect(result).toEqual(expectation);
	});
});
