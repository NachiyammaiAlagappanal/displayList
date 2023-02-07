const milliseconds = 1000;
const seconds = 2;

const config = {
	refreshIDLength: 4,
	idLength: 16,
	filters: ['All', 'Active', 'Completed'],
	TickerDelay: milliseconds * seconds,
	tasks: ['Task1', 'Task2', 'Task3'],
	modes: ['dark', 'light'],
};

export default config;
