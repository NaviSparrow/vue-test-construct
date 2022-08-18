import { computed, toRefs } from "vue";
import { MAX_TEXT_SIZE } from "@/utils/utils";
import { OfferType } from "@/types/OfferType";

type useCatalogCardProps = {
  offer: OfferType;
};

export default function useCatalogCard(props: useCatalogCardProps) {
  const { offer } = toRefs(props);
  const { description, price, amount } = offer.value;

  const formattedDescription = computed(() => {
    if (description.length > MAX_TEXT_SIZE) {
      return `${description.slice(0, MAX_TEXT_SIZE)}...`;
    }
    return description;
  });

  const defaultPrice = computed(() => Math.ceil(price / amount));

  return { formattedDescription, defaultPrice };
}
