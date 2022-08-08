<script setup>
import useSearch from "@/hooks/useSearch";

const { searchQuery, setSearchTerm } = useSearch();
</script>

<template>
  <section class="controls__search search">
    <h2 class="visually-hidden">Поиск</h2>
    <label class="search__control">
      <input
        v-model="searchQuery"
        class="search__input"
        type="text"
        name="search"
      />
      <span class="visually-hidden">Поиск.</span>
      <button class="search__button" type="button" @click="setSearchTerm">
        <span class="visually-hidden">Кнопка поиска.</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          role="img"
        >
          <path
            d="M5.917.5a5.417 5.417 0 0 1 5.416 5.417 5.43 5.43 0 0 1-1.3 3.525l.225.225h.659l4.166 4.166-1.25 1.25-4.166-4.166v-.659l-.225-.225a5.43 5.43 0 0 1-3.525 1.3A5.416 5.416 0 1 1 5.917.5Zm0 1.667a3.734 3.734 0 0 0-3.75 3.75 3.734 3.734 0 0 0 3.75 3.75 3.734 3.734 0 0 0 3.75-3.75 3.734 3.734 0 0 0-3.75-3.75Z"
            fill="#fff"
          />
        </svg>
      </button>
    </label>
  </section>
</template>
