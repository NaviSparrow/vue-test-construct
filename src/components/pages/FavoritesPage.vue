<script setup>
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useFavoritePage from "@/hooks/useFavoritePage";

const { sortedFavoritesOffers } = useFavoritePage();
</script>

<template>
  <page-layout>
    <page-catalog :offers="sortedFavoritesOffers" v-if="sortedFavoritesOffers.length" />
    <p v-else>Вы ничего не добавили в избранное</p>
  </page-layout>
</template>
