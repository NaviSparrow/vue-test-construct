<script setup lang="ts">
import PageCatalog from "@/components/PageCatalog.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { sortedFavoriteOffersList } = storeToRefs(store);
</script>

<template>
  <page-catalog :offers="sortedFavoriteOffersList" v-if="sortedFavoriteOffersList.length" />
  <p v-else>Вы ничего не добавили в избранное</p>
</template>
