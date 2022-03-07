// import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	refreshID: rndString(refreshIDLength),
	input: '',
	todos: [],
};

export default seed;
