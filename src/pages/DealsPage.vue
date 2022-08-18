<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { sortedDealOffersList } = storeToRefs(store);
</script>

<template>
  <page-catalog :offers="sortedDealOffersList" v-if="sortedDealOffersList.length" />
  <p v-else>Вы ничего не добавили в сделки</p>
</template>
