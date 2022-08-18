<script setup lang="ts">
import useSearch from "@/hooks/useSearch";
import global from "/public/css/global.module.css";

const { searchQuery, setSearchTerm } = useSearch();
</script>

<template>
  <section>
    <h2 :class="global.visuallyHidden">Поиск</h2>
    <label :class="$style.control">
      <input :class="$style.searchInput" type="text" name="search" v-model="searchQuery" @keydown.enter="setSearchTerm" />
      <span :class="global.visuallyHidden">Поиск.</span>
      <button :class="$style.applyButton" type="button" @click="setSearchTerm">
        <span :class="global.visuallyHidden">Кнопка поиска.</span>
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

<style module>
.control {
  display: flex;
  min-width: 274px;
  padding: 4px;
  border: 1px solid #e0e3ee;
  border-radius: 10px;
}

.searchInput {
  flex-grow: 1;
  margin-right: 10px;
  font-family: inherit;
  font-size: 15px;
  line-height: 100%;
  color: #2d3b87;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.searchInput:hover {
  background-color: rgba(245, 243, 243, 0.68);
}

.applyButton {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #2d3b87;
}

.applyButton:hover {
  background-color: #212b64;
}

.applyButton:active {
  background-color: #213ead;
}
</style>
