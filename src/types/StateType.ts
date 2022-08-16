import { OfferListType } from "@/types/OfferType";

export type StateType = {
  allOffersList: OfferListType;
  isDataLoaded: boolean;
  currentPage: string;
  currentSort: string;
  searchTerm: string;
};
