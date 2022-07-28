import { createStore } from "vuex";

import { Main } from "@/store/main/main";

export default createStore({
  modules: {
    main: Main,
  },
});
