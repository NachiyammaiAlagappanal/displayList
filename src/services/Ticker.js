const Ticker = {
	start: (context) => {
		const { actions, config } = context;

		return setInterval(() =>
			actions.AddTasks('New Task'), config.TickerDelay);
	},
};

export default Ticker;
