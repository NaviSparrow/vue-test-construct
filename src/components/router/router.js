import { createRouter, createWebHashHistory } from "vue-router";
import StoragePage from "@/components/pages/StoragePage";

const routes = [
  {
    path: "/",
    component: StoragePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
