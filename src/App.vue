<script setup>
import { useMainStore } from "@/store/main";
import { onMounted } from "vue";

const mainStore = useMainStore();
onMounted(() => mainStore.fetchOffersData());
</script>

<template>
  <router-view></router-view>
</template>
