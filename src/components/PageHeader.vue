<template>
  <header class="page-header">
    <div class="page-header__decor"></div>
    <nav class="page-header__nav navigation">
      <div class="navigation__wrapper">
        <ul class="navigation__menu">
          <li
            :class="{
              navigation__item: true,
              'navigation__item--active': isFavoritePage,
            }"
          >
            <router-link
              :to="{ name: Navigation.Favorite }"
              class="navigation__link"
              @click="() => setCurrentPage(Navigation.Favorite)"
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
              'navigation__item--active': isStoragePage,
            }"
          >
            <router-link
              :to="{ name: Navigation.Storage }"
              class="navigation__link"
              @click="() => setCurrentPage(Navigation.Storage)"
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
              'navigation__item--active': isDealsPage,
            }"
          >
            <router-link
              :to="{ name: Navigation.Deals }"
              class="navigation__link"
              @click="() => setCurrentPage(Navigation.Deals)"
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
/* eslint-disable prettier/prettier */
import useNavigation from "@/hooks/useNavigation";

export default {
  name: "PageHeader",
  setup() {
    const {
      setCurrentPage,
      isDealsPage,
      isFavoritePage,
      isStoragePage,
      Navigation
    } = useNavigation();
    return {
      setCurrentPage,
      isDealsPage,
      isFavoritePage,
      isStoragePage,
      Navigation
    };
  },
};
</script>

<style scoped></style>
