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
  <button
    :class="{
      [$style.button]: !props.isDeal,
      [$style.smallSize]: isFavoritePage,
      [$style.active]: props.isDeal
    }"
    type="button"
  >
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
  transition: background-color 0.5s ease-in-out;
}

.button:hover {
  box-shadow: 0 0 4px 0 #000000;
}

.button:active {
  box-shadow: 0 0 2px 0 #000000;
  background-color: #dfdfe3;
}

.active {
  composes: button;
  background: linear-gradient(0deg, #69c57f, #69c57f7a, #2d3b8700);
  box-shadow: 0 0 2px 1px #2d3b87;
  color: #00000091;
}

.active:hover {
  box-shadow: 0 0 5px 0 #000000;
}

.active:active {
  box-shadow: 0 0 3px 0 #000000;
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
