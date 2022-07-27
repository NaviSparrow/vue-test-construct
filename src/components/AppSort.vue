<template>
  <section class="controls__sort sort">
    <h2 class="visually-hidden">Сортировка</h2>
    <ul class="sort__list">
      <li class="sort__item">
        <button class="sort__button sort__button--active">Все типы</button>
      </li>
      <li class="sort__item">
        <button class="sort__button">Прямые продажи</button>
      </li>
      <li class="sort__item">
        <button class="sort__button">Аукцион</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AppSort",
};
</script>

<style scoped></style>
