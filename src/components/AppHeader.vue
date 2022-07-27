<template>
  <header class="page-header">
    <div class="page-header__decor"></div>
    <nav class="page-header__nav navigation">
      <div class="navigation__wrapper">
        <ul class="navigation__menu">
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="16"
                height="14"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#favorites"></use>
              </svg>
              <span class="navigation__label">Избранное</span>
            </a>
          </li>
          <li class="navigation__item navigation__item--active">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#storage"></use>
              </svg>
              <span class="navigation__label">Склад</span>
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#deal"></use>
              </svg>
              <span class="navigation__label">Сделки</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped></style>
