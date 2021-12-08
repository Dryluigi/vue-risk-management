export default {
  setValues(state, payload) {
    const { sell, buy } = payload;

    state.sell = sell;
    state.buy = buy;
  },
  updateSell(state, sell) {
    state.sell = sell;
  },
  updateBuy(state, buy) {
    state.buy = buy;
  }
}