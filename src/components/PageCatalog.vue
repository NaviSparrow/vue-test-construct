<script setup lang="ts">
import CatalogCard from "@/components/CatalogCard.vue";
import global from "/public/css/global.module.css";
import { OfferListType } from "@/types/OfferType";

type PageCatalogProps = {
  offers: OfferListType;
};

const props = defineProps<PageCatalogProps>();
</script>

<template>
  <section :class="$style.catalog">
    <h2 :class="global.visuallyHidden">Каталог.</h2>
    <div :class="$style.list">
      <catalog-card v-for="offer in props.offers" :offer="offer" :key="offer.id" />
    </div>
  </section>
</template>

<style module>
.catalog {
  font-size: 13px;
  line-height: 100%;
  color: #2d3b87;
}

@media (max-width: 340px) {
  .catalog {
    font-size: 12px;
  }
}

.list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
