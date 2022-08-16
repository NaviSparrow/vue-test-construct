import { computed, toRefs } from "vue";
import useNavigation from "@/hooks/useNavigation";
import { useMainStore } from "@/store/main";
import { NewUserInfoType } from "@/types/utils";

type useCardButtonsProps = {
  isDeal: boolean;
  isPaid: boolean;
};

export default function useCardButtons(props: useCardButtonsProps) {
  const { isDeal, isPaid } = toRefs(props);
  const { isStoragePage, isFavoritePage, isDealsPage } = useNavigation();

  const store = useMainStore();

  const buttonClickHandler = (newUserData: NewUserInfoType): void => store.changeCardUserInfo(newUserData);

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
    buttonClickHandler
  };
}
