<template>
  <page-layout>
    <page-catalog
      :offers="sortedFavoritesOffers"
      v-if="sortedFavoritesOffers.length"
    />
    <p v-else>Вы ничего не добавили в избранное</p>
  </page-layout>
</template>

<script>
import { mapGetters } from "vuex";
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";

export default {
  components: { PageLayout, PageCatalog },
  computed: {
    ...mapGetters({
      sortedFavoritesOffers: "main/sortedFavoritesOffers",
    }),
  },
};
</script>

<style scoped></style>
