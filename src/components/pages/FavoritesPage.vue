<template>
  <page-header />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Избранное</h1>
      <div class="page-main__header controls">
        <header-sort />
      </div>
      <page-catalog
        :offers="sortedFavoritesOffers"
        v-if="sortedFavoritesOffers.length"
      />
      <p v-else>Вы ничего не добавили в избранное</p>
    </div>
  </main>
  <page-footer />
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import HeaderSort from "@/components/HeaderSort";
import PageCatalog from "@/components/PageCatalog";
import PageFooter from "@/components/PageFooter";

export default {
  components: { PageFooter, PageCatalog, HeaderSort, PageHeader },
  computed: {
    ...mapGetters({
      sortedFavoritesOffers: "main/sortedFavoritesOffers",
    }),
  },
};
</script>

<style scoped></style>
