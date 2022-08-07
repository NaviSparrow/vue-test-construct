<template>
  <button
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
  name: "PayButton",
  props: {
    isPaid: Boolean,
    isDeal: Boolean,
  },
};
</script>

<style scoped></style>
