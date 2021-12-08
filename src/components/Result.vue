<template>
  <table class="border-collapse border min-w-0 overflow-x-scroll text-center">
    <thead>
      <tr>
        <th
          class="px-4"
          colspan="2"
        >
          Expected Returns
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="er in expectedReturns"
        :key="er.label"
      >
        <td class="border">
          {{ er.label }}
        </td>
        <td :class="['border', er.max ? 'font-bold text-blue-500' : '']">
          {{ er.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Result",
  computed: {
    expectedReturns() {
      const payoff = this.$store.state.payoff.payoff;
      const demands = this.$store.state.history.demands;
      const ers = [];

      for (let i = 0; i < payoff.length; i++) {
        const label = "ER" + demands[i].demand;
        let value = 0;
        
        for (let j = 0; j < payoff[i].length; j++) {
          value += payoff[i][j] * demands[j].probability;
        }

        ers.push({ label, value });
      }

      const max = ers.reduce((prev, er) => {
        if (er.value > prev) return er.value;

        return prev;
      }, 0);

      console.log(max);

      const ersWithMaxFlag = ers.map(er => {
        if (er.value === max) {
          return {
            ...er,
            max: true,
          }
        }

        return er;
      });

      return ersWithMaxFlag;
    }
  }
};
</script>

<style>
</style>