<template>
  <page-header />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">{{ currentPageHeading }}</h1>
      <div class="page-main__header controls">
        <header-sort />
        <header-search v-if="isStoragePage" />
      </div>
      <slot></slot>
    </div>
  </main>
  <page-footer />
</template>

<script>
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderSort from "@/components/HeaderSort";
import { mapState } from "vuex";
import { Navigation } from "@/utils/utils";

export default {
  components: { PageFooter, PageHeader, HeaderSearch, HeaderSort },
  name: "PageLayout",
  computed: {
    ...mapState({
      currentPage: (state) => state.main.currentPage,
    }),
    isFavoritePage() {
      return this.currentPage === Navigation.Favorite;
    },
    isDealsPage() {
      return this.currentPage === Navigation.Deals;
    },
    isStoragePage() {
      return this.currentPage === Navigation.Storage;
    },
    currentPageHeading() {
      return this.isStoragePage
        ? "Склад"
        : this.isDealsPage
        ? "Сделки"
        : "Избранное";
    },
  },
};
</script>

<style scoped></style>
