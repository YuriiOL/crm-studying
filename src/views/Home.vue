<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading" />
    <div v-else class="row">
      <HomeBill :rates="currency.rates"></HomeBill>
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      ></HomeCurrency>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBill from "../components/HomeBill";
import HomeCurrency from "../components/HomeCurrency";
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      currency: null,
    };
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.loading = false;
    },
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");

    this.loading = false;
  },
  components: {
    HomeBill,
    HomeCurrency,
  },
};
</script>
