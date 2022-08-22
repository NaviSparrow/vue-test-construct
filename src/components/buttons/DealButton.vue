<script setup lang="ts">
import { SUCCESS_DEAL_TEXT, ADD_DEAL_TEXT } from "@/utils/utils";
import useNavigation from "@/hooks/useNavigation";

type DealButtonProps = {
  isDeal: boolean;
};

const props = defineProps<DealButtonProps>();
const { isFavoritePage } = useNavigation();
</script>

<template>
  <button :class="isFavoritePage ? $style.smallSize : $style.button" type="button">
    {{ props.isDeal ? SUCCESS_DEAL_TEXT : ADD_DEAL_TEXT }}
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

.smallSize {
  composes: button;
  min-height: 40px;
  padding: 12px;
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
    width: 90%;
  }
}
</style>
