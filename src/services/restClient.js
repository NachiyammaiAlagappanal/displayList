import axios from 'axios';

const actions = {
	create: ({ data, basePath }) => ({
		method: 'post',
		url: basePath,
		data: data,
	}),

	update: ({ data, id, basePath }) => ({
		method: 'put',
		url: `${ basePath }/${ id }`,
		data: data,
	}),

	remove: ({ id, basePath }) => ({
		method: 'delete',
		url: `${ basePath }/${ id }`,
	}),

	get: ({ id, basePath }) => ({
		method: 'get',
		url: `${ basePath }/${ id }`,
	}),

	getAll: ({ basePath }) => ({
		method: 'get',
		url: basePath,
	}),

};

const restClient = ({ host, port }) => {
	const basePath = `${ host }:${ port }`;

	return ({ action, name, ...props }) =>
		axios(actions[action]({ ...props, basePath: `${ basePath }/${ name }` }));
};

export default restClient;
