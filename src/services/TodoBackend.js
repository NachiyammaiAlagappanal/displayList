import { omit } from '@laufire/utils/collection';
import axios from 'axios';

const TodoBackend = {
	create: async (todo) => {
		const res = await axios.post(
			'http://localhost:1234/todos', todo,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const createdData = omit(res.data.data, ['updatedAt', 'createdAt']);

		return createdData;
	},
};

export default TodoBackend;
