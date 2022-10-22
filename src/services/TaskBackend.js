import axios from 'axios';
import config from '../core/config';

const { url, port, headerConfig } = config;

const TaskBackend = {
	getTask: async () => {
		const res = await axios.get(`${ url }:${ port }/task`, headerConfig,);

		return res.data.data;
	},
};

export default TaskBackend;
