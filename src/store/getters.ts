import { GetterTree } from "vuex";

import { State, User } from "./state";

export type Getters = {
  getUser(state: State): User;
  getToken(state: State): string;
  getRole(state: State): number;
  isAuth(state: State): boolean;
  getLastPath(state: State): string;
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
  isAuth(state) {
    return state.login;
  },
  getLastPath(state) {
    const value = state.history.pop();
    return value ? value : "HomePage";
  },
};
