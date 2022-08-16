import { computed } from "vue";
import { PageHeading } from "@/utils/utils";
import useNavigation from "@/hooks/useNavigation";

export default function usePageLayout() {
  const { isDealsPage, isStoragePage } = useNavigation();

  const pageHeading = computed(() => {
    if (isStoragePage.value) {
      return PageHeading.Storage;
    } else if (isDealsPage.value) {
      return PageHeading.Deals;
    }
    return PageHeading.Favorite;
  });

  return { pageHeading };
}
