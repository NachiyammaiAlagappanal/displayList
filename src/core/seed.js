import { rndString } from '@laufire/utils/random';
import config from './config.js';

const seed = {
	refreshID: rndString(config.refreshIDLength),
	input: '',
	todos: [{ id: rndString(config.idLength),
		text: 'hello',
		completed: false,
		remove: false }],
	filter: 'all',
	editing: null,
	Tasks: [],
	value: '1',
	themeButton: false,
	theme: 'dark',
};

export default seed;
