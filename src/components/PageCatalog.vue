<template>
  <section class="catalog">
    <h2 class="visually-hidden">Каталог.</h2>
    <div class="catalog-list">
      <div class="catalog-list__wrapper">
        <catalog-card v-for="offer in offers" :offer="offer" :key="offer.id" />
      </div>
    </div>
  </section>
</template>

<script>
import CatalogCard from "@/components/CatalogCard";
export default {
  name: "PageCatalog",
  components: { CatalogCard },
  props: {
    offers: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
