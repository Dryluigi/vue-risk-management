<template>
  <div class="flex flex-col">
    <div class="text-center">
      <h1 class="text-lg font-semibold my-2">
        Risk Management
      </h1>
      <p>by Mario Prasetya Mulya</p>
    </div>
    <div class="grid lg:grid-cols-3 xs:grid-rows-3 gap-x-4 w-full p-4">
      <div class="">
        <PriceAndHistory />
      </div>
      <div
        v-if="showPayoff"
        class="min-w-0 overflow-auto"
      >
        <PayoffTable />
      </div>
      <div v-if="showExpectedReturns">
        <Result />
      </div>
    </div>
  </div>
</template>

<script>
import PriceAndHistory from "./components/PriceAndHistory";
import PayoffTable from "./components/PayoffTable";
import Result from "./components/Result";

export default {
  name: "App",
  components: {
    PriceAndHistory,
    PayoffTable,
    Result,
  },
  computed: {
    showPayoff() {
      return this.$store.state.payoff.payoff.length > 0;
    },
    showExpectedReturns() {
      return this.$store.state.payoff.payoff.length > 0;
    },
  }
};
</script>

<style>
</style>
