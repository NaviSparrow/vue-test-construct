<template>
  <page-header />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Сделки</h1>
      <div class="page-main__header controls">
        <header-sort />
      </div>
      <page-catalog :offers="sortedDealOffers" />
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
      sortedDealOffers: "main/sortedDealOffers",
    }),
  },
};
</script>

<style scoped></style>
