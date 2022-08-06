<template>
  <div class="lds-dual-ring" v-if="!isDataLoaded"></div>
  <template v-else>
    <page-layout>
      <page-catalog :offers="sortedAndSearchedOffers" />
    </page-layout>
  </template>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";

export default {
  components: {
    PageLayout,
    PageCatalog,
  },
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
