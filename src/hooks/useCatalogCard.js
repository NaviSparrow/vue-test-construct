import { computed, toRefs } from "vue";
import { MAX_TEXT_SIZE } from "@/utils/utils";

export default function useCatalogCard(props) {
  const { offer } = toRefs(props);
  const { description } = offer.value;

  const formatedDescription = computed(() => {
    if (description.length > MAX_TEXT_SIZE) {
      return `${description.slice(0, MAX_TEXT_SIZE)}...`;
    }
    return description;
  });
  return { formatedDescription };
}
