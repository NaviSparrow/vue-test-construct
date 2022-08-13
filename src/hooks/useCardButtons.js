import { useStore } from "vuex";
import { computed, toRefs } from "vue";
import useNavigation from "@/hooks/useNavigation";

export default function useCardButtons(props) {
  const { isDeal, isPaid } = toRefs(props);
  const { isStoragePage, isFavoritePage, isDealsPage } = useNavigation();

  const store = useStore();
  const changeCardData = (data) => store.dispatch("main/changeData", data);

  const isDealButtonVisible = computed(() => {
    if (isStoragePage.value) {
      return true;
    } else if (isFavoritePage.value && !isDeal.value) {
      return true;
    }
    return false;
  });

  const isFavoriteButtonVisible = computed(() => {
    if (isStoragePage.value) {
      return true;
    } else if (isDealsPage.value && !isPaid.value) {
      return true;
    }
    return false;
  });

  const isPayButtonVisible = computed(() => {
    if (isDealsPage.value) {
      return true;
    } else if (isFavoritePage.value && isDeal.value) {
      return true;
    }
    return false;
  });

  return {
    isPayButtonVisible,
    isFavoriteButtonVisible,
    isDealButtonVisible,
    changeCardData
  };
}
