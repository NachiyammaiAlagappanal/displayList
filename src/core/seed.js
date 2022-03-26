import { rndString } from '@laufire/utils/random';
import config from './config.js';

const seed = {
	refreshID: rndString(config.refreshIDLength),
	input: '',
	todos: [],
	filter: 'all',
	editing: null,
};

export default seed;
