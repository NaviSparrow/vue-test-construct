import { createRouter, createWebHashHistory } from "vue-router";
import StoragePage from "@/components/pages/StoragePage.vue";
import BusinessPage from "@/components/pages/DealsPage.vue";
import FavoritesPage from "@/components/pages/FavoritesPage.vue";
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
  history: createWebHashHistory()
});

export default router;