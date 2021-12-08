<template>
  <p class="mb-4">
    Input data barang
  </p>
  <div class="flex flex-col">
    <input
      id="buy"
      v-model="buy"
      type="number"
      name="buy"
      placeholder="Harga beli"
      class="mb-4 p-2 border border-gray-400"
    >
    <input
      id="buy"
      v-model="sell"
      type="number"
      name="buy"
      placeholder="Harga beli"
      class="mb-4 p-2 border border-gray-400"
    >
  </div>
  <p class="mb-4">
    Data Penjualan
  </p>
  <div class="flex mb-4">
    <input
      id="dataCount"
      v-model="demandsCount"
      type="number"
      name="dataCount"
      placeholder="Jumlah Data"
      class="p-2 border border-gray-400 flex-1"
    >
    <button
      class="ml-2 px-2 bg-blue-500 text-white hover:bg-blue-400"
      @click="$store.commit('setDemandsCount', demandsCount)"
    >
      Ganti jumlah
    </button>
  </div>
  <table class="w-full">
    <thead class="border p-4">
      <tr>
        <th class="border-r">
          Probabilitas
        </th>
        <th>Permintaan</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(d, pos) in demands"
        :key="d.random"
        class="border-b"
      >
        <td>
          <input
            type="number"
            class="w-full p-2"
            placeholder="Input probabilitas"
            :value="d.probability"
            @input="$store.commit('setProbability', { pos, value: $event.target.value })"
          >
        </td>
        <td>
          <input
            type="number"
            class="w-full p-2"
            placeholder="Input permintaan"
            :value="d.demand"
            @input="$store.commit('setDemand', { pos, value: $event.target.value })"
          >
        </td>
      </tr>
    </tbody>
  </table>
  <button
    class="text-center w-full my-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-400"
    @click="$store.dispatch('calculatePayoff')"
  >
    Hitung
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "PriceAndHistory",
  data() {
    return {
      demandsCount: this.$store.state.history.demands.length,
    }
  },
  computed: {
    sell: {
      get() {
        return this.$store.state.price.sell;
      },
      set(value) {
        this.$store.commit('updateSell', value);
      }
    },
    buy: {
      get() {
        return this.$store.state.price.buy;
      },
      set(value) {
        this.$store.commit('updateBuy', value);
      }
    },
    ...mapState({
      demands: state => state.history.demands
    })
  },
  methods: {
    calculateHandler() {
      console.log(this.demands);
    },
    updateDemandsCount(event) {
      this.demandsCount = event.target.value;
    },
  }
};
</script>

<style>
</style>