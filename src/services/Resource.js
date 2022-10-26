import { map, omit } from '@laufire/utils/collection';

const operations = {
	create: async ({ client, name, action, data }) => {
		const res = await client({ name, action, data });
		const { data: createdData } = res.data;

		return omit(createdData, ['updatedAt', 'createdAt']);
	},

	getAll: async ({ client, name, action }) => {
		const res = await client({ name, action });
		const { data: collections } = res.data;
		const requiredCollections = map(collections, (collection) =>
			omit(collection, ['updatedAt', 'createdAt']));

		return requiredCollections;
	},

	get: async ({ client, name, action, id }) => {
		const res = await client({ name, action, id });
		const { data: fetchedData } = res.data;

		return omit(fetchedData, ['updatedAt', 'createdAt']);
	},

	update: async ({ client, name, action, id, data }) => {
		const res = await client({ name, action, data, id });
		const { data: updatedData } = res.data;

		return omit(updatedData, ['updatedAt', 'createdAt']);
	},

	remove: async ({ client, name, action, id }) => {
		const res = await client({ name, action, id });
		const { status } = res.data;

		return status;
	},
};

const genClientFn = ({ action, client, name }) =>
	(props) => operations[action]({ client, name, action, ...props });

const resource = ({ name, client }) => ({
	create: genClientFn({ client: client, name: name, action: 'create' }),
	getAll: genClientFn({ client: client, name: name, action: 'getAll' }),
	get: genClientFn({ client: client, name: name, action: 'get' }),
	update: genClientFn({ client: client, name: name, action: 'update' }),
	remove: genClientFn({ client: client, name: name, action: 'remove' }),
});

export default resource;
