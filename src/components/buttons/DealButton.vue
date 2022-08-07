<template>
  <button class="offer__add-deal-button button" type="button">
    {{ isDeal ? "В сделках" : "Добавить в сделки" }}
  </button>
</template>

<script>
export default {
  name: "DealButton",
  props: {
    isDeal: Boolean,
  },
};
</script>

<style scoped></style>
