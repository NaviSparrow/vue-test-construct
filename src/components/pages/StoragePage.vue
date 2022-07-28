<template>
  <page-header
    :current-page="currentPage"
    @update:current-page="setCurrentPage"
  />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Каталог</h1>
      <div class="page-main__header controls">
        <header-sort />
        <header-search
          :search-term="searchTerm"
          @update:serach-term="setSearchTerm"
        />
      </div>
      <page-catalog :offers="filteredOffers" />
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import PageHeader from "@/components/PageHeader";
import HeaderSort from "@/components/HeaderSort";
import HeaderSearch from "@/components/HeaderSearch";
import PageCatalog from "@/components/PageCatalog";

export default {
  components: { PageCatalog, HeaderSearch, HeaderSort, PageHeader },
  computed: {
    ...mapState({
      isDataLoaded: (state) => state.main.isDataLoaded,
    }),
    ...mapGetters({
      filteredOffers: "main/filteredOffers",
    }),
  },
  methods: {
    ...mapMutations({
      setSearchTerm: "main/setSearchTerm",
      setCurrentPage: "main/setCurrentPage",
    }),
    ...mapActions({
      fetchOffers: "main/fetchOffers",
    }),
  },
  mounted() {
    this.fetchOffers();
  },
};
</script>

<style scoped></style>
