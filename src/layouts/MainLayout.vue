<template>
  <div>
    <Loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <Nav @side-button="isOpen = !isOpen"></Nav>
      <Side :hideSide="isOpen"></Side>
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
    >
  </div>
</template>

<script>
import Nav from "@/components/app/Navbar";
import Side from "@/components/app/Sidebar";

export default {
  data() {
    return {
      isOpen: true,
      loading: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Nav,
    Side,
  },
};
</script>

<style lang="scss" scoped>
</style>