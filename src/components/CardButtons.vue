<script setup>
import useCardButtons from "@/hooks/useCardButtons";
import PayButton from "@/components/buttons/PayButton";
import DealButton from "@/components/buttons/DealButton";
import FavoriteButton from "@/components/buttons/FavoriteButton";

const props = defineProps({
  cardId: Number,
  isFavorite: Boolean,
  isDeal: Boolean,
  isPaid: Boolean
});

const { changeCardData, isDealButtonVisible, isFavoriteButtonVisible, isPayButtonVisible } = useCardButtons(props);
</script>

<template>
  <div :class="$style.wrapper">
    <deal-button
      :is-deal="isDeal"
      v-if="isDealButtonVisible"
      @click="() => changeCardData({ prop: 'isDeal', value: !isDeal, id: cardId })"
    />
    <pay-button
      v-if="isPayButtonVisible"
      :is-deal="isDeal"
      :is-paid="isPaid"
      @click="() => changeCardData({ prop: 'isPaid', value: !isPaid, id: cardId })"
    />
    <favorite-button
      v-if="isFavoriteButtonVisible"
      :is-favorite="isFavorite"
      @click="() => changeCardData({ prop: 'isFavorite', value: !isFavorite, id: cardId })"
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
