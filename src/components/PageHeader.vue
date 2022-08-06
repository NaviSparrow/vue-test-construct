<template>
  <header class="page-header">
    <div class="page-header__decor"></div>
    <nav class="page-header__nav navigation">
      <div class="navigation__wrapper">
        <ul class="navigation__menu">
          <li
            :class="{
              navigation__item: true,
              'navigation__item--active': isFavorites,
            }"
          >
            <router-link
              :to="{ name: 'favorites' }"
              class="navigation__link"
              @click.prevent="() => this.setCurrentPage('favorite')"
            >
              <svg
                class="navigation__link-icon"
                width="16"
                height="14"
                focusable="false"
                role="img"
              >
                <use href="images/svg/header-menu.svg#favorites"></use>
              </svg>
              <span class="navigation__label">Избранное</span>
            </router-link>
          </li>
          <li
            :class="{
              navigation__item: true,
              'navigation__item--active': isStorage,
            }"
          >
            <router-link
              :to="{ name: 'storage' }"
              class="navigation__link"
              @click.prevent="() => setCurrentPage('storage')"
            >
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="images/svg/header-menu.svg#storage"></use>
              </svg>
              <span class="navigation__label">Склад</span>
            </router-link>
          </li>
          <li
            :class="{
              navigation__item: true,
              'navigation__item--active': isDeals,
            }"
          >
            <router-link
              :to="{ name: 'deals' }"
              class="navigation__link"
              @click.prevent="() => setCurrentPage('deals')"
            >
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="images/svg/header-menu.svg#deal"></use>
              </svg>
              <span class="navigation__label">Сделки</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Navigation } from "@/utils/utils";

export default {
  name: "PageHeader",
  computed: {
    ...mapState({
      currentPage: (state) => state.main.currentPage,
    }),
    isFavorites() {
      return this.currentPage === Navigation.Favorite;
    },
    isStorage() {
      return this.currentPage === Navigation.Storage;
    },
    isDeals() {
      return this.currentPage === Navigation.Deals;
    },
  },
  methods: {
    ...mapMutations({
      setCurrentPage: "main/setCurrentPage",
    }),
  },
};
</script>

<style scoped></style>
