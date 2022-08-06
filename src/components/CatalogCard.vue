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
      <card-buttons
        :card-id="offer.id"
        :is-favorite="offer.isFavorite"
        :is-deal="offer.isDeal"
        :is-paid="offer.isPaid"
      />
    </div>
  </article>
</template>

<script>
import CardButtons from "@/components/CardButtons";
import { MAX_TEXT_SIZE } from "@/utils/utils";
export default {
  name: "CatalogCard",
  components: { CardButtons },
  props: {
    offer: {
      type: Object,
    },
  },
  computed: {
    showDescription() {
      if (this.offer.description.length > MAX_TEXT_SIZE) {
        return `${this.offer.description.slice(0, MAX_TEXT_SIZE)}...`;
      }
      return this.offer.description;
    },
  },
};
</script>

<style scoped></style>
