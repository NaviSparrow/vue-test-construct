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
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useDealsPage from "@/hooks/useDealsPage";

export default {
  components: { PageLayout, PageCatalog },
  setup() {
    const { sortedDealOffers } = useDealsPage();
    return { sortedDealOffers };
  },
};
</script>

<style scoped></style>
