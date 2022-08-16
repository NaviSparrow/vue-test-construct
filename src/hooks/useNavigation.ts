import { computed } from "vue";
import { Navigation } from "@/utils/utils";
import { useMainStore } from "@/store/main";

export default function useNavigation() {
  const store = useMainStore();
  const changePageHandler = (newValue: string) => store.changeCurrentPage(newValue);

  const isDealsPage = computed(() => store.currentPage === Navigation.Deals);
  const isFavoritePage = computed(() => store.currentPage === Navigation.Favorite);
  const isStoragePage = computed(() => store.currentPage === Navigation.Storage);

  return {
    isFavoritePage,
    isDealsPage,
    isStoragePage,
    changePageHandler
  };
}
