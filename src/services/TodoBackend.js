import { omit } from '@laufire/utils/collection';
import axios from 'axios';

const url = 'http://localhost';
const port = 1235;
const headerConfig = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const TodoBackend = {
	create: async (todo) => {
		const res = await axios.post(
			`${ url }:${ port }/todos`, todo, headerConfig,
		);
		const { data: createdData } = res.data;

		return omit(createdData, ['updatedAt', 'createdAt']);
	},

	update: async (id, todo) => {
		const res = await axios.put(
			`${ url }:${ port }/todos/${ id }`, todo, headerConfig,
		);
		const { data: updatedData } = res.data;

		return omit(updatedData, ['updatedAt', 'createdAt']);
	},
};

export default TodoBackend;
