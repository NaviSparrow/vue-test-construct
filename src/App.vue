<script setup>
import { useMainStore } from "@/store/main";
import { onMounted } from "vue";
import PageLayout from "@/pages/PageLayout";

const mainStore = useMainStore();
onMounted(() => mainStore.fetchOffersData());
</script>

<template>
  <page-layout>
    <router-view></router-view>
  </page-layout>
</template>
