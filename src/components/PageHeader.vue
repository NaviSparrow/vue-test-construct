<script setup>
import useNavigation from "@/hooks/useNavigation";
import { Navigation } from "@/utils/utils";

const { setCurrentPage, isDealsPage, isFavoritePage, isStoragePage } = useNavigation();
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.decor"></div>
    <nav>
      <div :class="$style.menuWrapper">
        <ul :class="$style.menu">
          <li :class="isFavoritePage ? [$style.menuItemActive] : [$style.menuItem]">
            <router-link
              :to="{ name: Navigation.Favorite }"
              :class="$style.menuLink"
              @click="() => setCurrentPage(Navigation.Favorite)"
            >
              <svg :class="$style.linkIcon" width="16" height="14" focusable="false" role="img">
                <use href="images/svg/header-menu.svg#favorites"></use>
              </svg>
              <span :class="$style.menuLabel">Избранное</span>
            </router-link>
          </li>
          <li :class="isStoragePage ? [$style.menuItemActive] : [$style.menuItem]">
            <router-link
              :to="{ name: Navigation.Storage }"
              :class="$style.menuLink"
              @click="() => setCurrentPage(Navigation.Storage)"
            >
              <svg :class="$style.linkIcon" width="18" height="20" focusable="false" role="img">
                <use href="images/svg/header-menu.svg#storage"></use>
              </svg>
              <span :class="$style.menuLabel">Склад</span>
            </router-link>
          </li>
          <li :class="{ navigation__item: true, 'navigation__item--active': isDealsPage }">
            <router-link
              :to="{ name: Navigation.Deals }"
              :class="$style.menuLink"
              @click="() => setCurrentPage(Navigation.Deals)"
            >
              <svg :class="$style.linkIcon" width="18" height="20" focusable="false" role="img">
                <use href="images/svg/header-menu.svg#deal"></use>
              </svg>
              <span :class="$style.menuLabel">Сделки</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style module>
.header {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.decor {
  min-width: 100%;
  min-height: 40px;
  background-color: #e0e3ee;
  border-radius: 0 0 10px 10px;
}

/*menu-navigation*/

.menuWrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

@media (max-width: 630px) {
  .menuWrapper {
    justify-content: center;
  }
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.menuItem {
  min-width: 86px;
  min-height: 50px;
  border-radius: 10px;
}

.menuItem:hover {
  opacity: 0.6;
}

.menuItem:active {
  background-color: #d5d5d5;
}

.menuItemActive {
  composes: menuItem;
  background-color: #f4f5f9;
  border-radius: 10px;
}

.menuLink {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 6px 7px 7px;
  height: 100%;
}

.linkIcon {
  margin-bottom: 4px;
}

.menuLabel {
  font-size: 13px;
  line-height: 100%;
  font-weight: 500;
  color: #2d3b87;
}

@media (max-width: 640px) {
  .menu {
    flex-grow: 1;
    justify-content: center;
  }

  .menuItem {
    min-width: 30%;
  }

  .linkIcon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 340px) {
  .linkIcon {
    width: 20px;
    height: 20px;
  }
}
</style>
