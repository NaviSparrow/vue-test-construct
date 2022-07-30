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
  created() {
    console.log("46464654564");
    this.fetchOffers();
  },
};
</script>
