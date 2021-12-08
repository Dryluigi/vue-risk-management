export default {
	setDemands(state, data) {
		state.data = data;
	},
	setDemandsCount(state, count) {
		const difference = +count - state.demands.length;
		const absDiff = Math.abs(difference);

		if (difference > 0) {
			const newData = [];
			for (let i = 0; i < absDiff; i++) {
				newData.push({
					demand: 0,
					probability: 0,
					random: Math.random(),
				});
			}

			state.demands = [
				...state.demands,
				...newData,
			];
		} else if (difference < 0) {
			const newData = state.demands.filter((d, index) => {
				if (index < state.demands.length - absDiff) {
					return d;
				}
			})

			state.demands = newData;
		}
	},
	setProbability(state, payload) {
		const { pos, value } = payload;

		state.demands[pos].probability = +value;
	},
	setDemand(state, payload) {
		const { pos, value } = payload;

		state.demands[pos].demand = +value;
	},
}