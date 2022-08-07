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
          @click="(evt) => setCurrentSort(evt.target.value)"
          :value="Sort.All"
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
          @click="(evt) => setCurrentSort(evt.target.value)"
          :value="Sort.DirectSale"
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
          @click="(evt) => setCurrentSort(evt.target.value)"
          :value="Sort.Auction"
        >
          Аукцион
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import useSort from "@/hooks/useSort";
export default {
  name: "HeaderSort",
  setup() {
    const {
      Sort,
      setCurrentSort,
      isCurrentSortAll,
      isCurrentSortAuction,
      isCurrentSortDirectSale,
    } = useSort();
    return {
      Sort,
      setCurrentSort,
      isCurrentSortAll,
      isCurrentSortAuction,
      isCurrentSortDirectSale,
    };
  },
};
</script>

<style scoped></style>
