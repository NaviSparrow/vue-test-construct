import { Navigation, Sort } from "@/utils/utils";
import fakejson from "../../../fake.json";

export const Main = {
  state: () => ({
    offersList: [],
    dealOffers: [],
    favoriteOffers: [],
    paidOffers: [],
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
    dealList(state) {
      return state.offersList.filter((offer) => offer.isDeal);
    },
    favoriteList(state) {
      return state.offersList.filter((offer) => offer.isFavorite);
    },
    sortedDealOffers(state, getters) {
      return getters.getSortedOffers(getters.dealList);
    },
    sortedFavoritesOffers(state, getters) {
      return getters.getSortedOffers(getters.favoriteList);
    },
    sortedAndSearchedOffers(state, getters) {
      return getters.sortedAllOffers.filter((offer) =>
        offer.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
  mutations: {
    setOffers(state, payload) {
      state.offersList = payload;
    },
    setDealOffers(state, payload) {
      state.dealOffers = payload;
    },
    setFavoriteOffers(state, payload) {
      state.favoriteOffers = payload;
    },
    changeCardData(state, payload) {
      const index = state.offersList.findIndex(
        (offer) => offer.id === payload.id
      );
      state.offersList[index] = {
        ...state.offersList[index],
        [payload.prop]: payload.value,
      };
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
        commit(
          "setDealOffers",
          fakejson.offers.filter((offer) => offer.isDeal)
        );
        commit(
          "setFavoriteOffers",
          fakejson.offers.filter((offer) => offer.isFavorite)
        );
        commit("setIsDataLoaded", true);
      }, 2000);
    },
    changeData({ commit }, data) {
      commit("changeCardData", data);
    },
  },
  namespaced: true,
};
