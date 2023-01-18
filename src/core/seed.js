import { rndString } from '@laufire/utils/random';
import config from './config.js';

const seed = {
	refreshID: rndString(config.refreshIDLength),
	input: '',
	todos: [],
	filter: 'all',
	editing: null,
	Tasks: [],
	value: '1',
	themeButton: false,
	theme: 'dark',
};

export default seed;
