import { useStore } from "vuex";
import { computed } from "vue";

export default function useDealsPage() {
  const store = useStore();
  const sortedDealOffers = computed(() => store.getters["main/sortedDealOffers"]);

  return { sortedDealOffers };
}
