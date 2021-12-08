export default {
  calculatePayoff({ commit, rootState }) {
    const price = rootState.price;
    const data = rootState.history.demands;

    // console.log(rootState.history.demands)

    commit('calculatePayoff', { price, data });
  }
}