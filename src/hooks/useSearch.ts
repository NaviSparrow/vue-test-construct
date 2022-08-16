import { ref } from "vue";
import { useMainStore } from "@/store/main";

export default function useSearch() {
  const searchQuery = ref<string>("");
  const store = useMainStore();

  const setSearchTerm = (): void => store.changeSearchTerm(searchQuery.value);
  return { searchQuery, setSearchTerm };
}
