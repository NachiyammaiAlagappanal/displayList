import TodoManager from './TodoManager';
import * as random from '@laufire/utils/random';

describe('TodoManager', () => {
	const { getTodo, addTodo,
		toggleTodo, removeTodo, toggleAll, clearCompleted, hasCompletedTodos,
		hasActiveTodo, filterTodos, hasTodo, editTodo } = TodoManager;

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

		const result = getTodo({ config: { idLength: 16 },
			data: newRandomText });

		expect(result).toEqual({ id: randomStringOne,
			text: newRandomText, completed: false });
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
	});

	test('AddTodo - adding the Todos', () => {
		jest.spyOn(TodoManager, 'getTodo').mockReturnValue(context.data);
		const result = addTodo(context);

		const expectedResult = [...existingTodos, context.data];

		expect(result).toEqual(expectedResult);
	});

	test('toggleTodo = toggle the todos', () => {
		const result = toggleTodo(context, changedTodo);

		const expectation = [{ ...changedTodo,
			completed: changedTodo.completed }, unChangedTodo];

		expect(result).toEqual(expectation);
	});

	test('removeTodo - remove the todo', () => {
		const result = removeTodo({ ...context, data: changedTodo });

		expect(result).toEqual([unChangedTodo]);
	});
	test('toggleAll - to toggleAll the todos', () => {
		const result = toggleAll({ ...context, data: false });

		expect(result).toEqual(existingTodos);
	});
	test('ClearCompleted -  clearing the completed todos', () => {
		const todos = [{ ...changedTodo,
			completed: !changedTodo.completed }, unChangedTodo];
		const result = clearCompleted({ state: { todos }});

		expect(result).toEqual([unChangedTodo]);
	});

	describe('ActiveCountCheck - To count the Active Todos', () => {
		test('hasActiveTodo FalseCondition', () => {
			const result = hasActiveTodo(context);

			expect(result).toEqual(false);
		});
		test('hasActiveTodo TrueCondition', () => {
			const ModifiedContext = {
				state: {
					todos: [{ ...existingTodos,
						completed: !existingTodos.completed }],
				},
			};

			const result = hasActiveTodo(ModifiedContext);

			expect(result).toEqual(true);
		});
	});

	describe('CompletedTodosCount - To count the completed Todos', () => {
		test('hasCompletedTodo FalseCondition', () => {
			const result = hasCompletedTodos(context);

			expect(result).toEqual(false);
		});
		test('hasCompletedTodo TrueCondition', () => {
			const ModifiedContext = {
				state: {
					todos: [{ ...existingTodos,
						completed: !existingTodos.completed }],
				},
			};

			const result = hasCompletedTodos(ModifiedContext);

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
		test('hasTodo FalseCondition', () => {
			const result = hasTodo(context);

			expect(result).toEqual(true);
		});
		test('hasTodo TrueCondition', () => {
			const ModifiedContext = {
				state: {
					todos: [],
				},
			};
			const result = hasTodo(ModifiedContext);

			expect(result).toEqual(false);
		});
	});
	test('editing the Todo', () => {
		const data = 'Hi';
		const result = editTodo({ state: { todos: existingTodos,
			editing: changedTodo, input: data }});
		const expectation = [{ ...changedTodo,
			input: data }, unChangedTodo];

		expect(result).toEqual(expectation);
	});
});
