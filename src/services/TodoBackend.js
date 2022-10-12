import axios from 'axios';

const TodoBackend = {
	create: async (data) => {
		const todo = { ...data, completed: false };

		const res = await axios.post(
			'http://localhost:1234/todos', todo,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const createdData = res.data.data[0];

		return createdData;
	},
};

export default TodoBackend;
