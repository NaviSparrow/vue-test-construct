import { createRouter, createWebHistory } from "vue-router";
import StoragePage from "@/pages/StoragePage.vue";
import BusinessPage from "@/pages/DealsPage.vue";
import FavoritesPage from "@/pages/FavoritesPage.vue";
import { AppRoute, Navigation } from "@/utils/utils";

const routes = [
  {
    path: AppRoute.Root,
    name: Navigation.Storage,
    component: StoragePage
  },
  {
    path: AppRoute.Deals,
    name: Navigation.Deals,
    component: BusinessPage
  },
  {
    path: AppRoute.Favorite,
    name: Navigation.Favorite,
    component: FavoritesPage
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;
