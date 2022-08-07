import { useStore } from "vuex";
import { computed } from "vue";

export default function useStoragePage() {
  const store = useStore();
  const isDataLoaded = computed(() => store.state.main.isDataLoaded);
  const sortedAndSearchedOffers = computed(
    () => store.getters["main/sortedAndSearchedOffers"]
  );
  return { isDataLoaded, sortedAndSearchedOffers };
}
