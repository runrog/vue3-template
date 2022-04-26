import { createStore } from 'vuex';
import global from '@/global-view/vuex';
import utils from './utils';

const store = createStore({
  strict: true,
  modules: {
    global,
    utils,
  },
});

export default store;
