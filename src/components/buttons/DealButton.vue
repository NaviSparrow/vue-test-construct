<script setup>
defineProps({
  isDeal: Boolean
});
</script>

<template>
  <button class="offer__add-deal-button button" type="button">
    {{ isDeal ? "В сделках" : "Добавить в сделки" }}
  </button>
</template>
