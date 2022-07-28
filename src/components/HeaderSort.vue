<template>
  <section class="controls__sort sort">
    <h2 class="visually-hidden">Сортировка</h2>
    <ul class="sort__list">
      <li class="sort__item">
        <button
          :class="{
            sort__button: true,
            'sort__button--active': isCurrentSortAll,
          }"
          @click="buttonClickHandled"
          value="Все типы"
        >
          Все типы
        </button>
      </li>
      <li class="sort__item">
        <button
          :class="{
            sort__button: true,
            'sort__button--active': isCurrentSortDirectSale,
          }"
          @click="buttonClickHandled"
          value="Разовая продажа"
        >
          Прямые продажи
        </button>
      </li>
      <li class="sort__item">
        <button
          :class="{
            sort__button: true,
            'sort__button--active': isCurrentSortAuction,
          }"
          @click="buttonClickHandled"
          value="Аукцион"
        >
          Аукцион
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { Sort } from "@/utils/utils";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HeaderSort",
  methods: {
    ...mapMutations({
      setCurrentSort: "main/setCurrentSort"
    }),
    buttonClickHandled(evt) {
      this.setCurrentSort(evt.target.value);
    },
  },
  computed: {
    ...mapState({
      currentSort: (state) => state.main.currentSort,
    }),
    isCurrentSortAll() {
      return this.currentSort === Sort.All;
    },
    isCurrentSortAuction() {
      return this.currentSort === Sort.Auction;
    },
    isCurrentSortDirectSale() {
      return this.currentSort === Sort.DirectSale;
    },
  },
};
</script>

<style scoped></style>
