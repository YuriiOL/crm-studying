<template>
  <ul class="sidenav app-sidenav" :class="{ open: hideSide }">
    <router-link
      tag="li"
      active-class="active"
      :to="link.url"
      v-for="link of links"
      :key="link.id"
      :exact="link.exact"
      ><a class="waves-effect waves-orange pointer">{{
        link.title
      }}</a></router-link
    >
  </ul>
</template>
<script>
export default {
  props: ["hideSide"],
  data() {
    return {
      links: [
        { title: "Счет", url: "/", exact: true },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "/planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "/categories" },
      ],
    };
  },
};
</script>