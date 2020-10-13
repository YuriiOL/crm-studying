<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('side-button')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{
          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${(
            "0" + date.getHours()
          ).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${(
            "0" + date.getSeconds()
          ).slice(-2)}`
        }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="drop"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <router-link to="/login?message=logout" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      interval: null,
      dropdown: null,
    };
  },

  methods: {},
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.d = window.M.Dropdown.init(this.$refs.drop, {
      constrainWidth: false,
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
</style>