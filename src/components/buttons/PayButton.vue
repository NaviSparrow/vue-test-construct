<template>
  <button
    @click="$emit('dataChange', 'isPaid', !isPaid)"
    :class="{
      'offer__pay-button button': !isPaid,
      'offer__pay-button button offer__pay-button--disabled': isPaid,
    }"
    type="button"
  >
    {{ isPaid ? "Оплачено" : "Оплатить" }}
  </button>
</template>

<script>
export default {
  name: "AddToDealsButton",
  props: {
    isPaid: Boolean,
  },
};
</script>

<style scoped></style>
