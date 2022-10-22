import { map, omit } from '@laufire/utils/collection';
import axios from 'axios';
import config from '../core/config';

const { url, port, headerConfig } = config;

const create = async (path, data) => {
	const res = await axios.post(
		path, data, headerConfig,
	);
	const { data: createdData } = res.data;

	return omit(createdData, ['updatedAt', 'createdAt']);
};

const getAll = async (path) => {
	const res = await axios.get(path, headerConfig,);
	const { data: collections } = res.data;
	const requiredCollections = map(collections, (collection) =>
		omit(collection, ['updatedAt', 'createdAt']));

	return requiredCollections;
};

const get = async (path, id) => {
	const res = await axios.get(`${ path }/${ id }`, headerConfig,);
	const { data: fetchedData } = res.data;

	return omit(fetchedData, ['updatedAt', 'createdAt']);
};

const update = async (
	path, id, data
) => {
	const res = await axios.put(
		`${ path }/${ id }`, data, headerConfig,
	);
	const { data: updatedData } = res.data;

	return omit(updatedData, ['updatedAt', 'createdAt']);
};

const remove = async (path, id) => {
	const res = await axios.delete(`${ path }/${ id }`, headerConfig,);
	const { status } = res.data;

	return status;
};

const resource = (name) => {
	const path = `${ url }:${ port }/${ name }`;

	return {
		create: (data) => create(path, data),
		getAll: () => getAll(path),
		get: (id) => get(path, id),
		update: (id, data) => update(
			path, id, data
		),
		remove: (id) => remove(path, id),
	};
};

export default resource;
