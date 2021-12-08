import { createStore } from 'vuex';

import history from './modules/history';
import payoff from './modules/payoff';
import price from './modules/price';

export default createStore({
  modules: {
    history,
    payoff,
    price
  }
})
