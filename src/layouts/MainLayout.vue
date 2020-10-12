<template>
  <div class="app-main-layout">
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
</template>

<script>
import Nav from "@/components/app/Navbar";
import Side from "@/components/app/Sidebar";

export default {
  components: {
    Nav,
    Side,
  },

  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>