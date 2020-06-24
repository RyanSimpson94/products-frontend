import state from './state.module';
import getters from './getters.module';
import mutations from './mutations.module';
import actions from './actions.module';

export default {
  state: () => state,
  getters: getters,
  mutations: mutations,
  actions: actions
};