const milliseconds = 1000;
const seconds = 2;

const config = {
	refreshIDLength: 4,
	idLength: 16,
	filters: ['all', 'active', 'completed'],
	TickerDelay: milliseconds * seconds,
	tasks: ['Task1', 'Task2', 'Task3'],
};

export default config;
