import { ref, watch } from "vue";
import { useMainStore } from "@/store/main";

export default function useSearch() {
  const searchQuery = ref("");
  const store = useMainStore();

  const setSearchTerm = (): void => {
    store.changeSearchTerm(searchQuery.value);
  };

  watch(searchQuery, () => {
    if (!searchQuery.value.length) {
      store.changeSearchTerm("");
    }
  });
  return { searchQuery, setSearchTerm };
}
