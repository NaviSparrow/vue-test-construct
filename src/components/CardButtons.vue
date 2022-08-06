<template>
  <div class="offer__button-wrapper">
    <add-to-deals-button
      :is-deal="isDeal"
      v-if="isAddToDealVisible()"
      @click="
        () => dataChangeHandler({ prop: 'isDeal', value: !isDeal, id: cardId })
      "
    />
    <pay-button
      v-if="isPayButtonVisible()"
      :is-deal="isDeal"
      :is-paid="isPaid"
      @click="
        () => dataChangeHandler({ prop: 'isPaid', value: !isPaid, id: cardId })
      "
    />
    <add-to-favorites-button
      v-if="isAddToFavoriteVisible()"
      :is-favorite="isFavorite"
      @click="
        () =>
          dataChangeHandler({
            prop: 'isFavorite',
            value: !isFavorite,
            id: cardId,
          })
      "
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Navigation } from "@/utils/utils";
import AddToDealsButton from "@/components/buttons/AddToDealsButton";
import AddToFavoritesButton from "@/components/buttons/AddToFavoritesButton";
import PayButton from "@/components/buttons/PayButton";

export default {
  name: "CardButtons",
  components: { AddToDealsButton, AddToFavoritesButton, PayButton },
  props: {
    cardId: Number,
    isFavorite: Boolean,
    isDeal: Boolean,
    isPaid: Boolean,
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.main.currentPage,
    }),
    isFavoritePage() {
      return this.currentPage === Navigation.Favorite;
    },
    isDealsPage() {
      return this.currentPage === Navigation.Deals;
    },
    isStoragePage() {
      return this.currentPage === Navigation.Storage;
    },
  },
  methods: {
    ...mapMutations({
      changeList: "main/changeList",
    }),
    dataChangeHandler(data) {
      return this.changeList({
        id: data.id,
        prop: data.prop,
        newValue: data.value,
      });
    },
    isAddToDealVisible() {
      if (this.isStoragePage) {
        return true;
      } else if (this.isFavoritePage && !this.isDeal) {
        return true;
      }
      return false;
    },
    isAddToFavoriteVisible() {
      if (this.isStoragePage) {
        return true;
      } else if (this.isDealsPage && !this.isPaid) {
        return true;
      }
      return false;
    },
    isPayButtonVisible() {
      if (this.isDealsPage) {
        return true;
      } else if (this.isFavoritePage && this.isDeal) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped></style>
