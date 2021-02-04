import { GetterTree } from "vuex";

import { State, User } from "./state";

export type Getters = {
  getUser(state: State): User;
  getToken(state: State): string;
  getRole(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  getUser(state) {
    return state.user;
  },
  getToken(state) {
    return state.user.token;
  },
  getRole(state) {
    return state.user.role;
  },
  //   totalTaskCount(state) {
  //     return state.tasks.length;
  //   },
  //   getTaskById: state => (id: number) => {
  //     return state.tasks.find(task => task.id === id);
  //   },
};
