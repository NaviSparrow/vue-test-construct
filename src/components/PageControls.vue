<script setup lang="ts">
import HeaderSearch from "@/components/HeaderSearch.vue";
import HeaderSort from "@/components/HeaderSort.vue";
</script>

<template>
  <div :class="$style.controls">
    <header-sort />
    <header-search />
  </div>
</template>

<style module>
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

@media (max-width: 640px) {
  .controls {
    flex-direction: column;
    margin-bottom: 20px;
  }
}
</style>
