<script setup>
import useSort from "@/hooks/useSort";
import { Sort } from "@/utils/utils";

const { sortChangeHandler, isCurrentSortAll, isCurrentSortAuction, isCurrentSortDirectSale } = useSort();
</script>

<template>
  <section :class="$style.sortContainer">
    <h2 class="visually-hidden">Сортировка</h2>
    <ul :class="$style.list">
      <li :class="$style.item">
        <button
          :class="isCurrentSortAll ? [$style.pickButtonActive] : [$style.pickButton]"
          @click="sortChangeHandler"
          :value="Sort.All"
          type="button"
        >
          Все типы
        </button>
      </li>
      <li :class="$style.item">
        <button
          :class="isCurrentSortDirectSale ? [$style.pickButtonActive] : [$style.pickButton]"
          @click="sortChangeHandler"
          :value="Sort.DirectSale"
          type="button"
        >
          Прямые продажи
        </button>
      </li>
      <li :class="$style.item">
        <button
          :class="isCurrentSortAuction ? [$style.pickButtonActive] : [$style.pickButton]"
          @click="sortChangeHandler"
          :value="Sort.Auction"
          type="button"
        >
          Аукцион
        </button>
      </li>
    </ul>
  </section>
</template>

<style module>
.sortContainer {
  padding: 12px;
  font-size: 15px;
  line-height: 100%;
  border: 1px solid #e0e3ee;
  border-radius: 10px;
  background-color: #f4f5f9;
  margin-bottom: 20px;
}

@media (max-width: 640px) {
  .sortContainer {
    min-width: 100%;
    font-size: 20px;
  }

  .item {
    display: flex;
    justify-content: center;
    min-width: 30%;
  }
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.item:not(:last-child) {
  margin-right: 12px;
}

.pickButton {
  padding: 0;
  border: none;
  background-color: transparent;
  color: #969dc3;
  cursor: pointer;
}

.pickButton:hover {
  background-color: rgba(215, 213, 213, 0.68);
  border-radius: 5px;
}

.pickButton:active {
  border-radius: 5px;
  color: #5f627c;
}

.pickButtonActive {
  composes: pickButton;
  color: #2d3b87;
}
</style>
