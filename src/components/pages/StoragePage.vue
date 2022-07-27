<template>
  <AppHeader />
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Каталог</h1>
      <div class="page-main__header controls">
        <AppSort />
        <AppSearch />
      </div>
      <AppCatalog />
    </div>
  </main>
  <footer class="page-footer">
    <h2 class="page-footer__title">
      Developed by:
      <span> Gorobec Ivan</span>
    </h2>
  </footer>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSort from "@/components/AppSort";
import AppSearch from "@/components/AppSearch";
import AppCatalog from "@/components/AppCatalog";
import { Navigation, Sort } from "@/utils/utils";

export default {
  components: { AppCatalog, AppSearch, AppSort, AppHeader },
  data() {
    return {
      offersList: [],
      isDataLoaded: false,
      currentPage: Navigation.Storage,
      currenSort: Sort.All,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
