<script setup>
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderSort from "@/components/HeaderSort";
import useNavigation from "@/hooks/useNavigation";

const { pageHeading, isStoragePage } = useNavigation();
</script>

<template>
  <page-header />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">{{ pageHeading }}</h1>
      <div class="page-main__header controls">
        <header-sort />
        <header-search v-if="isStoragePage" />
      </div>
      <slot></slot>
    </div>
  </main>
  <page-footer />
</template>
