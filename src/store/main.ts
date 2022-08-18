import { defineStore } from "pinia";
import { Navigation, Sort } from "@/utils/utils";
import { StateType } from "@/types/StateType";
import { OfferListType } from "@/types/OfferType";
import { api, apiRoute } from "@/axios/api";
import { NewUserInfoType, ResponseFromServerType } from "@/types/utils";
import { AxiosResponse } from "axios";

export const useMainStore = defineStore("main", {
  state: (): StateType => ({
    allOffersList: [],
    isDataLoaded: false,
    currentPage: Navigation.Storage,
    currentSort: Sort.All,
    searchTerm: ""
  }),
  getters: {
    dealOffersList: (state) => {
      return state.allOffersList.filter((offer) => offer.userInformation.isDeal);
    },
    favoriteOffersList: (state) => {
      return state.allOffersList.filter((offer) => offer.userInformation.isFavorite);
    },
    sortedOffers: (state) => (list: OfferListType) => {
      return state.currentSort === Sort.All ? list : list.filter((offer) => offer.type === state.currentSort);
    },
    sortedAllOffersList(state): OfferListType {
      return this.sortedOffers(state.allOffersList);
    },
    sortedDealOffersList(): OfferListType {
      return this.sortedOffers(this.dealOffersList);
    },
    sortedFavoriteOffersList(): OfferListType {
      return this.sortedOffers(this.favoriteOffersList);
    },
    offersWithSortAndSearch(state): OfferListType {
      return this.sortedAllOffersList.filter((offer) => offer.title.toLowerCase().includes(state.searchTerm.toLowerCase()));
    }
  },
  actions: {
    setOffersList(payload: OfferListType) {
      this.allOffersList = payload;
    },
    changeCurrentPage(payload: string) {
      this.currentPage = payload;
    },
    changeCurrentSort(payload: string) {
      this.currentSort = payload;
    },
    changeSearchTerm(payload: string) {
      this.searchTerm = payload;
    },
    changeCardUserInfo(payload: NewUserInfoType) {
      const offerToChange = this.allOffersList.find((offer) => offer.id === payload.id);
      if (offerToChange) offerToChange.userInformation = { ...offerToChange.userInformation, [payload.key]: payload.value };
    },
    async fetchOffersData() {
      const response: AxiosResponse<ResponseFromServerType> = await api.get(apiRoute.Offers);
      this.setOffersList(response.data.offers);
      this.isDataLoaded = true;
    }
  },
  persist: true
});
