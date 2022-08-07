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
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useFavoritePage from "@/hooks/useFavoritePage";

export default {
  components: { PageLayout, PageCatalog },
  setup() {
    const { sortedFavoritesOffers } = useFavoritePage();
    return { sortedFavoritesOffers };
  },
};
</script>

<style scoped></style>
