import * as types from '@/store/mutation-types';

const state = {
  user: {},
};

const getters = {
  user(state) {
    return state.user;
  },
};

const mutations = {
  [types.SET_USER](state, { user }) {
    state.user = user;
  },
};

const actions = {
  setUser({ commit }, params) {
    commit(types.SET_USER, params);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
