import axios from 'axios';
import config from '../core/config';

const { url, headerConfig } = config;

const TaskBackend = {
	getTask: async () => {
		const res = await axios.get(`${ url }:1236/task`, headerConfig,);

		return res.data.data;
	},
};

export default TaskBackend;
