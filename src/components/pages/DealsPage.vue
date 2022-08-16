<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import PageLayout from "@/components/pages/PageLayout.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { sortedDealOffersList } = storeToRefs(store);
</script>

<template>
  <page-layout>
    <page-catalog :offers="sortedDealOffersList" v-if="sortedDealOffersList.length > 0" />
    <p v-else>Вы ничего не добавили в сделки</p>
  </page-layout>
</template>
