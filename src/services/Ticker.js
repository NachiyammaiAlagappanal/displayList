import TaskManager from './TaskManager';

const Ticker = {
	start: (context) => {
		const { config } = context;

		return setInterval(() => TaskManager.addTask(context),
			config.TickerDelay);
	},
};

export default Ticker;
