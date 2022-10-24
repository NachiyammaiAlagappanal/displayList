import axios from 'axios';
import config from '../core/config';

const { host } = config;

const TaskBackend = {
	getTask: async () => {
		const res = await axios.get(`${ host }:1235/task`);

		return res.data.data;
	},
};

export default TaskBackend;
