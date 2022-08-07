<!--  eslint-disable-->
<template>
  <div class="offer__button-wrapper">
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

<script>
import PayButton from "@/components/buttons/PayButton";
import useCardButtons from "@/hooks/useCardButtons";
import DealButton from "@/components/buttons/DealButton";
import FavoriteButton from "@/components/buttons/FavoriteButton";

export default {
  name: "CardButtons",
  components: { FavoriteButton, DealButton, PayButton },
  props: {
    cardId: Number,
    isFavorite: Boolean,
    isDeal: Boolean,
    isPaid: Boolean,
  },
  setup(props) {
    const {
      changeCardData,
      isDealButtonVisible,
      isFavoriteButtonVisible,
      isPayButtonVisible,
    } = useCardButtons(props);
    return {
      changeCardData,
      isPayButtonVisible,
      isFavoriteButtonVisible,
      isDealButtonVisible,
    };
  },
};
</script>

<style scoped></style>
