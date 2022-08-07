<template>
  <page-loader v-if="!isDataLoaded" />
  <page-layout v-else>
    <page-catalog :offers="sortedAndSearchedOffers" />
  </page-layout>
</template>

<script>
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useStoragePage from "@/hooks/useStoragePage";
import PageLoader from "@/components/PageLoader";

export default {
  components: {
    PageLoader,
    PageLayout,
    PageCatalog,
  },
  setup() {
    const { isDataLoaded, sortedAndSearchedOffers } = useStoragePage();
    return { isDataLoaded, sortedAndSearchedOffers };
  },
};
</script>
<style scoped></style>
