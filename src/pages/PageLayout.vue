<script setup lang="ts">
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageControls from "@/components/PageControls.vue";
import global from "/public/css/global.module.css";
import usePageLayout from "@/hooks/usePageLayout";
import PageLoader from "@/components/PageLoader.vue";
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { isDataLoaded } = storeToRefs(store);
const { pageHeading } = usePageLayout();
</script>

<template>
  <page-loader v-if="!isDataLoaded" />
  <template v-else>
    <page-header />
    <main :class="$style.main">
      <h1 :class="global.visuallyHidden">{{ pageHeading }}</h1>
      <page-controls />
      <slot></slot>
    </main>
    <page-footer />
  </template>
</template>

<style module>
.main {
  flex-grow: 1;
  margin-top: 70px;
}

@media (max-width: 640px) {
  .main {
    margin-top: 20px;
  }
}
</style>
