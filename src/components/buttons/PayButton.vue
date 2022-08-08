<script setup>
defineProps({
  isPaid: Boolean,
  isDeal: Boolean,
});
</script>

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
