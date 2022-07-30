import { Navigation, Sort } from "@/utils/utils";
import fakejson from "../../../fake.json";

// prettier-ignore
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
        return offers.slice().filter((offer) => offer.type === state.currentSort);
      };
    },
    sortedAllOffers(state, getters) {
      return getters.getSortedOffers(state.offersList);
    },
    sortedDealOffers(state, getters) {
      return getters.getSortedOffers(state.dealOffers);
    },
    sortedFavoritesOffers(state, getters) {
      return getters.getSortedOffers(state.favoriteOffers);
    },
    sortedPaidOffers(state, getters) {
      return getters.getSortedOffers(state.paidOffers);
    },
    sortedAndSearchedOffers(state, getters) {
      return getters.sortedAllOffers
          .filter((offer) => offer.title.toLowerCase().includes(state.searchTerm.toLowerCase()));
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
    setPaidOffers(state, payload) {
      state.paidOffers = payload;
    },
    toggleDealList(state, payload) {
      const payloadData = { ...payload };
      const isItemIncludes = state.dealOffers.some((offer) => offer.id === payloadData.id);
      console.log(payloadData);

      if (isItemIncludes) {
        state.dealOffers = state.dealOffers.filter((offer) => offer.id !== payloadData.id);
      } else {
        state.dealOffers = [...state.dealOffers, payloadData];
      }
    },
    toggleFavoriteList(state, payload) {
      const payloadData = { ...payload };
      console.log(payloadData);
      const isItemIncludes = state.favoriteOffers.some((offer) => offer.id === payloadData.id);
      console.log(isItemIncludes);

      if (isItemIncludes) {
        state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== payloadData.id);
      } else {
        state.favoriteOffers = [...state.favoriteOffers, payloadData];
      }
    },
    togglePaidList(state, payload) {
      const payloadData = { ...payload };
      console.log(payloadData);
      const isItemIncludes = state.paidOffers.some((offer) => offer.id === payloadData.id);

      if (isItemIncludes) {
        state.paidOffers = state.paidOffers.filter((offer) => offer.id !== payloadData.id);
      } else {
        state.paidOffers = [...state.paidOffers, payloadData];
      }
    },
    changeOfferData(state, payload) {
      console.log(payload)
      const index = state.offersList.findIndex((offer) => offer.id === payload.id);
      state.offersList[index] = {...state.offersList[index], [payload.prop]: payload.value};
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
        commit("setDealOffers", fakejson.offers.filter((offer) => offer.isDeal));
        commit("setFavoriteOffers", fakejson.offers.filter((offer) => offer.isFavorite));
        commit("setPaidOffers", fakejson.offers.filter((offer) => offer.isPaid));
        commit("setIsDataLoaded", true);
      }, 1000);
    },
  },
  namespaced: true,
};
