import { map, omit } from '@laufire/utils/collection';
import config from '../core/config';

const { host, port } = config;

const create = async ({ path, restClient, data }) => {
	const res = await restClient({
		method: 'post',
		url: path,
		data: data,
	});
	const { data: createdData } = res.data;

	return omit(createdData, ['updatedAt', 'createdAt']);
};

const getAll = async ({ path, restClient }) => {
	const res = await restClient({
		method: 'get',
		url: path,
	});
	const { data: collections } = res.data;
	const requiredCollections = map(collections, (collection) =>
		omit(collection, ['updatedAt', 'createdAt']));

	return requiredCollections;
};

const get = async ({ path, restClient, id }) => {
	const res = await restClient({
		method: 'get',
		url: `${ path }/${ id }`,
	});
	const { data: fetchedData } = res.data;

	return omit(fetchedData, ['updatedAt', 'createdAt']);
};

const update = async ({ path, restClient, id, data }) => {
	const res = await restClient({
		method: 'put',
		url: `${ path }/${ id }`,
		data: data,
	});
	const { data: updatedData } = res.data;

	return omit(updatedData, ['updatedAt', 'createdAt']);
};

const remove = async ({ path, restClient, id }) => {
	const res = await restClient({
		method: 'delete',
		url: `${ path }/${ id }`,
	});
	const { status } = res.data;

	return status;
};

const resource = ({ name, restClient }) => {
	const path = `${ host }:${ port }/${ name }`;

	return {
		create: (data) => create({ path, restClient, data }),
		getAll: () => getAll({ path, restClient }),
		get: (id) => get({ path, restClient, id }),
		update: (id, data) => update({ path, restClient, id, data }),
		remove: (id) => remove({ path, restClient, id }),
	};
};

export default resource;
