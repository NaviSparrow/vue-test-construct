<template>
  <div class="lds-dual-ring" v-if="!isDataLoaded"></div>
  <template v-else>
    <page-header />
    <main class="page-main">
      <div class="page-main__wrapper">
        <h1 class="visually-hidden">Склад</h1>
        <div class="page-main__header controls">
          <header-sort />
          <header-search
            :search-term="searchTerm"
            @update:serach-term="setSearchTerm"
          />
        </div>
        <page-catalog :offers="sortedAndSearchedOffers" />
      </div>
    </main>
    <page-footer />
  </template>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import PageHeader from "@/components/PageHeader";
import HeaderSort from "@/components/HeaderSort";
import HeaderSearch from "@/components/HeaderSearch";
import PageCatalog from "@/components/PageCatalog";
import PageFooter from "@/components/PageFooter";

export default {
  components: { PageFooter, PageCatalog, HeaderSearch, HeaderSort, PageHeader },
  computed: {
    ...mapState({
      isDataLoaded: (state) => state.main.isDataLoaded,
    }),
    ...mapGetters({
      sortedAndSearchedOffers: "main/sortedAndSearchedOffers",
    }),
  },
  methods: {
    ...mapMutations({
      setSearchTerm: "main/setSearchTerm",
    }),
  },
};
</script>
<style scoped></style>
