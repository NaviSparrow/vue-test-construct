<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      fetchOffers: "main/fetchOffers",
    }),
  },
  mounted() {
    this.fetchOffers();
  },
};
</script>
