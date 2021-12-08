<template>
  <h2 class="text-center font-semibold">
    Tabel Payoff
  </h2>
  <table class="border-collapse border min-w-0 overflow-x-scroll my-4">
    <tbody>
      <tr>
        <td
          rowspan="2"
          class="border px-2"
        >
          Probabilitas
        </td>
        <td
          :colspan="$store.state.history.demands.length"
          class="border text-center"
        >
          Jumlah dan Probabilitas
        </td>
      </tr>
      <tr>
        <td
          v-for="d in $store.state.history.demands"
          :key="d.random"
          class="border text-center px-2 w-48"
        >
          {{ d.demand }} = {{ d.probability }}
        </td>
      </tr>
      <tr
        v-for="(pay, pos) in $store.state.payoff.payoff"
        :key="pos + Math.random()"
      >
        <td class="border text-center px-2">
          {{ $store.state.history.demands[pos].demand }}
        </td>
        <td
          v-for="p in pay"
          :key="p + Math.random()"
          class="border text-center px-2"
        >
          {{ p }}
        </td>
        <!-- <td class="border text-center px-2">
          10 = 0,1
        </td>
        <td class="border text-center px-2">
          10 = 0,1
        </td>
        <td class="border text-center px-2">
          10 = 0,1
        </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PayoffTable",
};
</script>

<style>
</style>