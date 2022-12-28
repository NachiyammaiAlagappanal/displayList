import { rndString } from '@laufire/utils/random';

const TodoManager = {

	getTodo: ({ config, state }) => ({
		id: rndString(config.idLength),
		text: state.input,
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

	addTodo: (context) =>
		context.state.todos.concat(TodoManager.getTodo(context)),

	toggleTodo: ({ state: { todos }, data }) =>
		todos.map((todo) => (todo.id !== data.id
			? todo
			: {
				...todo,
				completed: !data.completed,
			}
		)),

	removeTodo: ({ state: { todos }, data }) =>
		todos.filter((todo) => todo.id !== data.id),

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

	editTodo: ({ state: { todos, editing, input }}) =>
		todos.map((todo) => (todo.id !== editing.id
			? todo
			: {
				...todo,
				input,
			})),

};

export default TodoManager;
