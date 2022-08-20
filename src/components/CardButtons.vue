<script setup lang="ts">
import useCardButtons from "@/hooks/useCardButtons";
import PayButton from "@/components/buttons/PayButton.vue";
import DealButton from "@/components/buttons/DealButton.vue";
import FavoriteButton from "@/components/buttons/FavoriteButton.vue";

type CardButtonsProps = {
  cardId: number;
  isFavorite: boolean;
  isDeal: boolean;
  isPaid: boolean;
};

const props = defineProps<CardButtonsProps>();

const { buttonClickHandler, isDealButtonVisible, isPayButtonVisible } = useCardButtons(props);
</script>

<template>
  <div :class="$style.wrapper">
    <deal-button
      :is-deal="props.isDeal"
      v-if="isDealButtonVisible"
      @click="buttonClickHandler({ id: props.cardId, key: 'isDeal', value: !props.isDeal })"
    />
    <pay-button
      :is-deal="props.isDeal"
      v-if="isPayButtonVisible"
      :is-paid="props.isPaid"
      @click="buttonClickHandler({ id: props.cardId, key: 'isPaid', value: !props.isPaid })"
    />
    <favorite-button
      :is-favorite="props.isFavorite"
      @click="buttonClickHandler({ id: props.cardId, key: 'isFavorite', value: !props.isFavorite })"
    />
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  margin-top: auto;
}

@media (max-width: 394px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
