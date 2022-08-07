import { useStore } from "vuex";
import { computed } from "vue";

export default function useFavoritePage() {
  const store = useStore();
  const sortedFavoritesOffers = computed(
    () => store.getters["main/sortedFavoritesOffers"]
  );

  return { sortedFavoritesOffers };
}
