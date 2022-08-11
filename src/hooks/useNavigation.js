import { computed } from "vue";
import { useStore } from "vuex";
import { Navigation } from "@/utils/utils";

export default function useNavigation() {
  const store = useStore();
  const currentPage = computed(() => store.state.main.currentPage);
  const setCurrentPage = (newValue) => store.commit("main/setCurrentPage", newValue);

  const isDealsPage = computed(() => currentPage.value === Navigation.Deals);
  const isFavoritePage = computed(() => currentPage.value === Navigation.Favorite);
  const isStoragePage = computed(() => currentPage.value === Navigation.Storage);

  const pageHeading = computed(() => {
    if (isStoragePage.value) {
      return "Склад";
    } else if (isDealsPage.value) {
      return "Сделки";
    }
    return "Избранное";
  });

  return {
    isFavoritePage,
    isDealsPage,
    isStoragePage,
    pageHeading,
    setCurrentPage
  };
}
