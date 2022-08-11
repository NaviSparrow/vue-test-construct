import { useStore } from "vuex";
import { computed } from "vue";
import { Sort } from "@/utils/utils";

export default function useSort() {
  const store = useStore();

  const currentSort = computed(() => store.state.main.currentSort);
  const setCurrentSort = (newSortValue) => store.commit("main/setCurrentSort", newSortValue);
  const sortChangeHandler = (evt) => setCurrentSort(evt.target.value);

  const isCurrentSortAll = computed(() => currentSort.value === Sort.All);
  const isCurrentSortAuction = computed(() => currentSort.value === Sort.Auction);
  const isCurrentSortDirectSale = computed(() => currentSort.value === Sort.DirectSale);

  return {
    sortChangeHandler,
    isCurrentSortAll,
    isCurrentSortAuction,
    isCurrentSortDirectSale
  };
}
