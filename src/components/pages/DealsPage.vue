<template>
  <page-layout>
    <page-catalog
      :offers="sortedDealOffers"
      v-if="sortedDealOffers.length > 0"
    />
    <p v-else>Вы ничего не добавили в сделки</p>
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
      sortedDealOffers: "main/sortedDealOffers",
    }),
  },
};
</script>

<style scoped></style>
