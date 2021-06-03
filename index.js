import { createStore } from "vuex";
import model from "../model/model.js";
export default createStore({
  state: {
    model: new model(),
  },
  mutations: {
    ADD_COMMENT(state, text) {
      state.model.addComment(text);
    },
    DELETE(state, id) {
      state.model.delete(id);
    },
  },
  actions: {},
  modules: {},
});
