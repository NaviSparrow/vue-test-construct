<script setup>
import PageCatalog from "@/components/PageCatalog";
import PageLayout from "@/components/pages/PageLayout";
import useStoragePage from "@/hooks/useStoragePage";
import PageLoader from "@/components/PageLoader";

const { isDataLoaded, sortedAndSearchedOffers } = useStoragePage();
</script>

<template>
  <page-loader v-if="!isDataLoaded" />
  <page-layout v-else>
    <page-catalog :offers="sortedAndSearchedOffers" />
  </page-layout>
</template>
