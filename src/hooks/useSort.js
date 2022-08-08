/* eslint-disable prettier/prettier */
import { useStore } from "vuex";
import { computed } from "vue";
import { Sort } from "@/utils/utils";

export default function useSort() {
  const store = useStore();

  const currentSort = computed(() => store.state.main.currentSort);
  const setCurrentSort = (newSortValue) => store.commit("main/setCurrentSort", newSortValue);

  const isCurrentSortAll = computed(() => currentSort.value === Sort.All);
  const isCurrentSortAuction = computed(() => currentSort.value === Sort.Auction);
  const isCurrentSortDirectSale = computed(() => currentSort.value === Sort.DirectSale);

  return {
    setCurrentSort,
    isCurrentSortAll,
    isCurrentSortAuction,
    isCurrentSortDirectSale,
  };
}
