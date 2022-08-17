<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import PageLayout from "@/pages/PageLayout.vue";
import PageLoader from "@/components/PageLoader.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { offersWithSortAndSearch, isDataLoaded } = storeToRefs(store);
</script>

<template>
  <page-loader v-if="!isDataLoaded" />
  <page-layout v-else>
    <page-catalog :offers="offersWithSortAndSearch" />
  </page-layout>
</template>
