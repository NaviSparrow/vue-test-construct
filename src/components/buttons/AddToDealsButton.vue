<template>
  <button
    @click="$emit('dataChange', 'isDeal', !isDeal)"
    class="offer__add-deal-button button"
    type="button"
  >
    Добавить в сделки
  </button>
</template>

<script>
export default {
  name: "AddToDealsButton",
  props: {
    isDeal: Boolean,
  },
};
</script>

<style scoped></style>
