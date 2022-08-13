<script setup>
defineProps({
  isDeal: Boolean
});
</script>

<template>
  <button :class="$style.button" type="button">
    {{ isDeal ? "В сделках" : "Добавить в сделки" }}
  </button>
</template>

<style module>
.button {
  composes: defaultButton from "/public/css/global.module.css";
  flex-grow: 1;
  max-width: 274px;
  margin: 0 auto;
  padding: 17px 35px;
}

.button:hover {
  box-shadow: 0 0 4px 0 #000000;
}

button:active {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.23);
}

@media (max-width: 956px) {
  .button {
    margin: 0;
  }
}

@media (max-width: 394px) {
  .button {
    margin: 0 0 12px 0;
    font-size: 14px;
    width: 100%;
  }
}
</style>
