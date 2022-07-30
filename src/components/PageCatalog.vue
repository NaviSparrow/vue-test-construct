<template>
  <section class="catalog">
    <h2 class="visually-hidden">Каталог.</h2>
    <div class="catalog-list">
      <div class="catalog-list__wrapper" v-if="isStoragePage">
        <storage-card v-for="offer in offers" :offer="offer" :key="offer.id" />
      </div>
      <div class="catalog-list__wrapper" v-else-if="isDealsPage">
        <deal-card v-for="offer in offers" :offer="offer" :key="offer.id" />
      </div>
      <div class="catalog-list__wrapper" v-else-if="isFavoritePage">
        <favorite-card v-for="offer in offers" :offer="offer" :key="offer.id" />
      </div>
    </div>
  </section>
</template>

<script>
import StorageCard from "@/components/StorageCard";
import { mapState } from "vuex";
import { Navigation } from "@/utils/utils";
import DealCard from "@/components/DealCard";
import FavoriteCard from "@/components/FavoriteCard";
export default {
  name: "PageCatalog",
  components: { FavoriteCard, DealCard, StorageCard },
  props: {
    offers: {
      type: Array,
    },
  },
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
  },
};
</script>

<style scoped></style>
