import { map, omit } from '@laufire/utils/collection';

const create = async ({ client, name, data }) => {
	const res = await client({
		name: name,
		action: 'create',
		data: data,
	});
	const { data: createdData } = res.data;

	return omit(createdData, ['updatedAt', 'createdAt']);
};

const getAll = async ({ client, name }) => {
	const res = await client({
		name: name,
		action: 'getAll',
	});
	const { data: collections } = res.data;
	const requiredCollections = map(collections, (collection) =>
		omit(collection, ['updatedAt', 'createdAt']));

	return requiredCollections;
};

const get = async ({ client, name, id }) => {
	const res = await client({
		name: name,
		action: 'get',
		id: id,
	});
	const { data: fetchedData } = res.data;

	return omit(fetchedData, ['updatedAt', 'createdAt']);
};

const update = async ({ client, name, id, data }) => {
	const res = await client({
		name: name,
		action: 'update',
		data: data,
		id: id,
	});
	const { data: updatedData } = res.data;

	return omit(updatedData, ['updatedAt', 'createdAt']);
};

const remove = async ({ client, name, id }) => {
	const res = await client({
		name: name,
		action: 'remove',
		id: id,
	});
	const { status } = res.data;

	return status;
};

const resource = ({ name, client }) => ({
	create: ({ data }) => create({ client, name, data }),
	getAll: () => getAll({ client, name }),
	get: ({ id }) => get({ client, name, id }),
	update: ({ id, data }) => update({ client, name, id, data }),
	remove: ({ id }) => remove({ client, name, id }),
});

export default resource;
