<script setup>
import CatalogCard from "@/components/CatalogCard";

defineProps({
  offers: Array
});
</script>

<template>
  <section :class="$style.catalog">
    <h2 class="visually-hidden">Каталог.</h2>
    <div :class="$style.list">
      <catalog-card v-for="offer in offers" :offer="offer" :key="offer.id" />
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
