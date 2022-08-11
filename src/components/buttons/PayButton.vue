<script setup>
defineProps({
  isPaid: Boolean,
  isDeal: Boolean
});
</script>

<template>
  <button
    :class="{
      [$style.button]: !isPaid,
      [$style.disabled]: isPaid
    }"
    type="button"
  >
    {{ isPaid ? "Оплачено" : "Оплатить" }}
  </button>
</template>

<style module>
.button {
  flex-grow: 1;
  margin: 0 auto;
  min-height: 40px;
  padding: 12px;
  background-color: #69c57f;
  color: #ffffff;
}

.button:hover {
  box-shadow: 0 0 4px 0 #053910;
}

.disabled {
  background-color: #ffffff;
  border: 1px solid #e0e3ee;
  color: #969dc3;
}

.disabled:hover {
  pointer-events: none;
  box-shadow: none;
  cursor: default;
}
</style>
