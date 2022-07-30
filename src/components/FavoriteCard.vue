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
        <p class="offer__description">{{ showDescription }}</p>
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
          v-if="!offer.isDeal"
          @click="dealClickHandler"
          :is-deal="offer.isDeal"
        />
        <pay-button
          @click="payClickHandler"
          v-else
          :is-deal="offer.isDeal"
          :is-paid="offer.isPaid"
        />
      </div>
    </div>
  </article>
</template>

<script>
import PayButton from "@/components/buttons/PayButton";
import AddToDealsButton from "@/components/buttons/AddToDealsButton";
import { mapMutations } from "vuex";

export default {
  name: "FavoriteCard",
  components: { PayButton, AddToDealsButton },
  props: {
    offer: {
      type: Object,
    },
  },
  computed: {
    showDescription() {
      if (this.offer.description.length > 229) {
        return `${this.offer.description.slice(0, 229)}...`;
      }
      return this.offer.description;
    },
  },
  methods: {
    ...mapMutations({
      changeList: "main/changeList",
    }),
    payClickHandler() {
      return this.changeList({
        id: this.offer.id,
        prop: "isPaid",
        newValue: !this.offer.isPaid,
      });
    },
    dealClickHandler() {
      return this.changeList({
        id: this.offer.id,
        prop: "isDeal",
        newValue: !this.offer.isDeal,
      });
    },
  },
};
</script>

<style scoped></style>
