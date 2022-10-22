import TodoBackend from './TodoBackend';

const TodoManager = {

	getTodo: ({ data: { text }}) => ({
		text: text,
		completed: false,
	}),

	hasInput: (input) => input === '',

	hasCompletedTodos: ({ state: { todos }}) =>
		todos.filter((todo) => todo.completed).length !== 0,

	filters: {
		all: () => true,
		active: (todos) => !todos.completed,
		completed: (todos) => todos.completed,
	},

	toggleTodo: ({ state: { todos }, data }) =>
		todos.map((todo) => (todo.id !== data.id
			? todo
			: {
				...todo,
				completed: !data.completed,
			}
		)),

	removeTodo: async ({ actions, state: { todos }}, { todo: target }) => {
		const status = await TodoBackend.remove(target.id);
		const todosWithoutTarget = todos
			.filter((todo) => todo.id !== target.id);

		status === 'success'
			? actions.removeTodo(todosWithoutTarget)
			: actions.removeTodo(todos);
	},

	toggleAll: ({ state: { todos }, data }) => todos.map((todo) => ({
		...todo,
		completed: data,
	})),

	clearCompleted: ({ state: { todos }}) =>
		todos.filter((todo) => !todo.completed),

	hasActiveTodo: ({ state: { todos }}) =>
		todos.filter((todo) => !todo.completed).length === 0,

	filterTodos: ({ state: { todos, filter }}) =>
		todos.filter(TodoManager.filters[filter]),

	hasTodo: ({ state: { todos }}) => todos.length !== 0,

	editTodo: async ({ actions, state: { todos, editing, input }}) => {
		const target = todos.find((todo) => todo.id === editing.id);
		const editedTodo = await TodoBackend.update(editing.id, {
			...target,
			text: input,
		});
		const editedTodos = todos.map((todo) => (todo.id !== editing.id
			? todo
			: { ...todo, ...editedTodo }));

		return actions.editTodos(editedTodos);
	},

	addTodo: async (context) => {
		const { actions, data } = context;
		const createdTodo = await TodoBackend
			.create(TodoManager.getTodo({ data: { text: data }}));

		return actions.addTodo(createdTodo);
	},

	getAllTodo: async (context) => {
		const { actions } = context;
		const todos = await TodoBackend.getAll();

		return actions.setTodos(todos);
	},
};

export default TodoManager;
