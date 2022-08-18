<script setup lang="ts">
import CardButtons from "@/components/CardButtons.vue";
import useCatalogCard from "@/hooks/useCatalogCard";
import { OfferType } from "@/types/OfferType";
import { toRefs } from "vue";

type CatalogCardProps = {
  offer: OfferType;
};

const props = defineProps<CatalogCardProps>();
const { offer } = toRefs(props);
const { image, type, title, location, dealer, productType, price, amount } = offer.value;

const { formattedDescription, defaultPrice } = useCatalogCard(props);
</script>

<template>
  <article :class="$style.offer">
    <div :class="$style.mainInfo">
      <img :class="$style.image" :src="'/images/' + image" width="256" height="256" alt="Древесина." />
      <div>
        <p :class="$style.type">{{ type }}</p>
        <h3 :class="$style.title">{{ title }}</h3>
        <p :class="$style.location">{{ location }}</p>
        <span :class="$style.dealer">Продавец</span>
        <span>{{ dealer }}</span>
        <p :class="$style.productName">
          <span :class="$style.productType">Вид товара</span>
          {{ productType }}
        </p>
        <p :class="$style.description">{{ formattedDescription }}</p>
      </div>
    </div>
    <div :class="$style.secondaryInfo">
      <b :class="$style.price">{{ price }} ₽</b>
      <dl :class="$style.details">
        <div :class="$style.detailsItem">
          <dt>Количество</dt>
          <dd :class="$style.detailsDescription">{{ amount }} шт.</dd>
        </div>
        <div :class="$style.detailsItem">
          <dt>Стоимость за штуку</dt>
          <dd :class="$style.detailsDescription">{{ defaultPrice }} ₽</dd>
        </div>
      </dl>
      <card-buttons
        :card-id="props.offer.id"
        :is-favorite="props.offer.userInformation.isFavorite"
        :is-deal="props.offer.userInformation.isDeal"
        :is-paid="props.offer.userInformation.isPaid"
      />
    </div>
  </article>
</template>

<style module>
.offer {
  display: grid;
  grid-template-columns: 1fr 314px;
  border: 1px solid #e0e3ee;
  border-radius: 20px;
}

.offer:not(:last-child) {
  margin-bottom: 34px;
}

@media (max-width: 956px) {
  .offer {
    grid-template-columns: none;
    grid-auto-rows: max-content;
  }
}

.mainInfo {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  padding: 20px 20px 68px 20px;
}

@media (max-width: 640px) {
  .mainInfo {
    grid-template-columns: none;
    grid-auto-rows: max-content;
  }
}

.image {
  border-radius: 10px;
}

@media (max-width: 956px) {
  .image {
    margin-bottom: 12px;
    justify-self: center;
  }
}

.type {
  margin: 0 0 12px 0;
  padding: 0;
  color: #969dc3;
}

.title {
  margin: 0 0 37px 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
}

@media (max-width: 394px) {
  .title {
    margin-bottom: 10px;
  }
}

.location {
  margin: 0 0 12px 0;
  padding: 5px 5px 5px 27px;
  width: max-content;
  border-radius: 5px;
  background-color: #f4f5f9;
  background-image: url("../../public/images/svg/icon-location.svg");
  background-repeat: no-repeat;
  background-size: 10px 14px;
  background-position: center left 10px;
  color: #616ca5;
}

@media (max-width: 394px) {
  .location {
    margin-bottom: 9px;
  }
}

.dealer {
  display: inline-block;
  margin: 0 4px 12px 0;
  color: #969dc3;
}

.productName {
  width: max-content;
  margin: 0 0 12px 0;
  padding: 8px;
  background: #f4f5f9;
  border-radius: 10px;
}

.productType {
  display: block;
  color: #969dc3;
  margin-bottom: 6px;
}

.description {
  margin: 0;
  max-width: 100%;
  line-height: 20px;
}

.secondaryInfo {
  display: flex;
  flex-direction: column;
  padding: 20px 18px 20px 17px;
  border-left: 1px solid #e0e3ee;
  border-radius: 20px;
}

@media (max-width: 956px) {
  .secondaryInfo {
    border-left: none;
    border-top: 1px solid #e0e3ee;
    border-radius: 20px;
  }
}

.price {
  display: block;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 14px 0;
}

.details {
  display: flex;
  flex-direction: column;
  color: #969dc3;
  margin: 0;
}

.detailsItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.detailsDescription {
  color: #2d3b87;
}
</style>
