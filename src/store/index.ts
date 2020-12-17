import { User } from '@/models/user';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: { role: 0, name: "", token: "" } as User,
    entered: false,
    verified: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
