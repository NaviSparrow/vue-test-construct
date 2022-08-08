<!--  eslint-disable-->
<script setup>
import useCardButtons from "@/hooks/useCardButtons";
import PayButton from "@/components/buttons/PayButton";
import DealButton from "@/components/buttons/DealButton";
import FavoriteButton from "@/components/buttons/FavoriteButton";

const props = defineProps({
  cardId: Number,
  isFavorite: Boolean,
  isDeal: Boolean,
  isPaid: Boolean,
});

const {
  changeCardData,
  isDealButtonVisible,
  isFavoriteButtonVisible,
  isPayButtonVisible,
} = useCardButtons(props);
</script>

<template>
  <div class="offer__button-wrapper">
    <deal-button
      :is-deal="isDeal"
      v-if="isDealButtonVisible"
      @click="
        () => changeCardData({ prop: 'isDeal', value: !isDeal, id: cardId })
      "
    />
    <pay-button
      v-if="isPayButtonVisible"
      :is-deal="isDeal"
      :is-paid="isPaid"
      @click="
        () => changeCardData({ prop: 'isPaid', value: !isPaid, id: cardId })
      "
    />
    <favorite-button
      v-if="isFavoriteButtonVisible"
      :is-favorite="isFavorite"
      @click="
        () =>
          changeCardData({ prop: 'isFavorite', value: !isFavorite, id: cardId })
      "
    />
  </div>
</template>
