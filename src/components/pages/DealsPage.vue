<script setup>
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useDealsPage from "@/hooks/useDealsPage";

const { sortedDealOffers } = useDealsPage();
</script>

<template>
  <page-layout>
    <page-catalog
      :offers="sortedDealOffers"
      v-if="sortedDealOffers.length > 0"
    />
    <p v-else>Вы ничего не добавили в сделки</p>
  </page-layout>
</template>
