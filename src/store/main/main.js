import { Navigation, Sort } from "@/utils/utils";
import fakejson from "../../../fake.json";

export const Main = {
  state: () => ({
    offersList: [],
    paidOffers: [],
    favoriteOffers: [],
    isDataLoaded: false,
    currentPage: Navigation.Storage,
    currentSort: Sort.All,
    searchTerm: "",
  }),
  getters: {
    getSortedOffers(state) {
      return function (offers) {
        if (state.currentSort === Sort.All) {
          return offers;
        }
        return offers
          .slice()
          .filter((offer) => offer.type === state.currentSort);
      };
    },
    sortedAllOffers(state, getters) {
      return getters.getSortedOffers(state.offersList);
    },
    sortedPaidOffers(state, getters) {
      return getters.getSortedOffers(state.paidOffers);
    },
    sortedFavoritesOffers(state, getters) {
      return getters.getSortedOffers(state.favoriteOffers);
    },
    sortedAndSearchedOffers(state, getters) {
      return getters.sortedAllOffers.filter((offer) =>
        offer.title.includes(state.searchTerm)
      );
    },
  },
  mutations: {
    setOffers(state, payload) {
      state.offersList = payload;
    },
    setPaidOffers(state, payload) {
      state.paidOffers = [...state.paidOffers, payload];
    },
    setFavoriteOffers(state, payload) {
      state.favoriteOffers = [...state.favoriteOffers, payload];
    },
    setIsDataLoaded(state, payload) {
      state.isDataLoaded = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setCurrentSort(state, payload) {
      state.currentSort = payload;
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
  },
  actions: {
    fetchOffers({ commit }) {
      setTimeout(() => {
        commit("setOffers", [...fakejson.offers]);
        commit("setIsDataLoaded", true);
      }, 2000);
    },
  },
  namespaced: true,
};
