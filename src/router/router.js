import { createRouter, createWebHashHistory } from "vue-router";
import StoragePage from "@/components/pages/StoragePage";
import BusinessPage from "@/components/pages/DealsPage";
import FavoritesPage from "@/components/pages/FavoritesPage";

const routes = [
  {
    path: "/",
    name: "storage",
    component: StoragePage,
  },
  {
    path: "/deals",
    name: "deals",
    component: BusinessPage,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
