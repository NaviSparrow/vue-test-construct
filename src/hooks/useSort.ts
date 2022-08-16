import { computed } from "vue";
import { Sort } from "@/utils/utils";
import { useMainStore } from "@/store/main";

export default function useSort() {
  const store = useMainStore();

  const currentSort = computed(() => store.currentSort);
  const sortChangeHandler = (evt: Event): void => store.changeCurrentSort((evt.target as HTMLButtonElement).value);

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
