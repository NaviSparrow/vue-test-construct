<script setup>
defineProps({
  isPaid: Boolean,
  isDeal: Boolean
});
</script>

<template>
  <button :class="isPaid ? [$style.disabled] : [$style.button]" type="button">
    {{ isPaid ? "Оплачено" : "Оплатить" }}
  </button>
</template>

<style module>
.button {
  composes: defaultButton from "/public/css/global.module.css";
  flex-grow: 1;
  margin: 0 auto;
  min-height: 40px;
  padding: 12px;
  background-color: #69c57f;
  color: #ffffff;
}

@media (max-width: 394px) {
  .button {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 12px 30px;
    width: 70%;
    margin-bottom: 10px;
  }
}

.button:hover {
  box-shadow: 0 0 4px 0 #053910;
}

.disabled {
  composes: button;
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
