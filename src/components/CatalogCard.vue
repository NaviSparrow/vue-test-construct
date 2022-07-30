<template>
  <article class="catalog-list__item offer">
    <div class="offer__main-info">
      <img
        class="offer__image"
        :src="'/images/' + offer.image"
        width="256"
        height="256"
        alt="Древесина."
      />
      <div class="offer__info">
        <p class="offer__type">{{ offer.type }}</p>
        <h3 class="offer__title">{{ offer.title }}</h3>
        <p class="offer__location">{{ offer.location }}</p>
        <span class="offer__dealer">Продавец</span>
        <span class="offer__dealer-name">{{ offer.dealer }}</span>
        <p class="offer__product-name">
          <span class="offer__product-type">Вид товара</span>
          {{ offer.productType }}
        </p>
        <p class="offer__description">{{ offer.description }}</p>
      </div>
    </div>
    <div class="offer__secondary-info">
      <b class="offer__price">{{ offer.price }} ₽</b>
      <dl class="offer__price-details details">
        <div class="details__item">
          <dt class="details__name">Количество</dt>
          <dd class="details__description">{{ offer.amount }} шт.</dd>
        </div>
        <div class="details__item">
          <dt class="details__name">Стоимость за штуку</dt>
          <dd class="details__description">{{ offer.priceForOne }} ₽</dd>
        </div>
      </dl>
      <div class="offer__button-wrapper">
        <add-to-deals-button
          v-if="isDealButtonVisible"
          :is-deal="offer.isDeal"
          @dataChange="dataChangeHandler"
        />
        <pay-button
          v-if="isPayButtonVisible"
          :is-paid="offer.isPaid"
          @dataChange="dataChangeHandler"
        />
        <add-to-favorites-button
          v-if="isFavoriteButtonVisible"
          :is-favorite="offer.isFavorite"
          @dataChange="dataChangeHandler"
        />
      </div>
    </div>
  </article>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Navigation } from "@/utils/utils";
import AddToFavoritesButton from "@/components/buttons/AddToFavoritesButton";
import AddToDealsButton from "@/components/buttons/AddToDealsButton";
import PayButton from "@/components/buttons/PayButton";
export default {
  name: "CatalogCard",
  components: { PayButton, AddToDealsButton, AddToFavoritesButton },
  props: {
    offer: {
      type: Object,
    },
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
    setButtonText() {
      if (this.isStoragePage || (this.isFavoritePage && !this.offer.isDeal)) {
        return "Добавить в сделки";
      } else if (this.offer.isDeal && this.offer.isPaid) {
        return "Оплачено";
      }
      return "Оплатить";
    },
    isDealButtonVisible() {
      return !this.isDealsPage;
    },
    isFavoriteButtonVisible() {
      if (this.isFavoritePage) {
        return false;
      } else if (this.isDealsPage && this.offer.isPaid) {
        return false;
      }
      return true;
    },
    isPayButtonVisible() {
      return (this.isDealsPage || this.isFavoritePage) && !this.offer.isDeal;
    },
  },
  methods: {
    ...mapMutations({
      changeOfferData: "main/changeOfferData",
      toggleDealList: "main/toggleDealList",
      toggleFavoriteList: "main/toggleFavoriteList",
      togglePaidList: "main/togglePaidList",
    }),
    dataChangeHandler(prop, newValue) {
      this.changeOfferData({
        id: this.offer.id,
        prop: prop,
        value: newValue,
      });
      switch (prop) {
        case "isFavorite":
          return this.toggleFavoriteList(this.offer);
        case "isDeal":
          return this.toggleDealList(this.offer);
        case "isPaid":
          return this.togglePaidList(this.offer);
      }
    },
  },
};
</script>

<style scoped></style>
