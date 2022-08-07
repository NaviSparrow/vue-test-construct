import { ref } from "vue";
import { useStore } from "vuex";

export default function useSearch() {
  const searchQuery = ref("");
  const store = useStore();

  const setSearchTerm = () =>
    store.commit("main/setSearchTerm", searchQuery.value);

  return { searchQuery, setSearchTerm };
}
