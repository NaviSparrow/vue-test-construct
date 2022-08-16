<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import PageLayout from "@/components/pages/PageLayout.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { sortedFavoriteOffersList } = storeToRefs(store);
</script>

<template>
  <page-layout>
    <page-catalog :offers="sortedFavoriteOffersList" v-if="sortedFavoriteOffersList.length" />
    <p v-else>Вы ничего не добавили в избранное</p>
  </page-layout>
</template>
