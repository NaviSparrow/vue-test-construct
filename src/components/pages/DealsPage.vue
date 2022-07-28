<template>
  <page-header />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Сделки</h1>
      <div class="page-main__header controls">
        <header-sort />
        <!--        <header-search-->
        <!--          :search-term="searchTerm"-->
        <!--          @update:serach-term="setSearchTerm"-->
        <!--        />-->
      </div>
      <page-catalog :offers="sortedPaidOffers" />
    </div>
  </main>
  <footer class="page-footer">
    <h2 class="page-footer__title">
      Developed by:
      <span> Gorobec Ivan</span>
    </h2>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import HeaderSort from "@/components/HeaderSort";
import PageCatalog from "@/components/PageCatalog";

export default {
  components: { PageCatalog, HeaderSort, PageHeader },
  computed: {
    ...mapGetters({
      sortedPaidOffers: "main/sortedPaidOffers",
    }),
  },
};
</script>

<style scoped></style>
