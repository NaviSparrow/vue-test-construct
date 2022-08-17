<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { offersWithSortAndSearch } = storeToRefs(store);
</script>

<template>
  <page-catalog :offers="offersWithSortAndSearch" />
</template>
