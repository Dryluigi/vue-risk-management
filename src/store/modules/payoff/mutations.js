export default {
	calculatePayoff(state, payload) {
		const { data, price } = payload;
		const payoff = new Array(data.length).fill(0).map(() => new Array(data.length).fill(0));
		
		for (let i = 0; i < payoff.length; i++) {
			const value = data[i].demand * price.sell - data[i].demand * price.buy;
			
			payoff[i][i] = value;
			
			for (let j = i + 1; j < payoff[i].length; j++) {
					payoff[i][j] = value;
				}
			}
			
			for (let i = 1; i < payoff.length; i++) {
				for (let j = 0; j < i; j++) {
					payoff[i][j] = data[j].demand * price.sell - data[i].demand * price.buy;
				}
			}

		state.payoff = payoff;
	},
}