import { MutationTree } from "vuex";

import { State, User } from "./state";

export enum MutationType {
  SetUser = "SET_USER",
  ClearUser = "CLEAR_USER",
  SetLogin = "SET_LOGIN",
  SetChecked = "SET_CHECKED",
  AddPath = "ADD_PATH",
}

export type Mutations = {
  [MutationType.SetUser](state: State, data: User): void;
  [MutationType.ClearUser](state: State): void;
  [MutationType.SetLogin](state: State, data: boolean): void;
  [MutationType.SetChecked](state: State, data: boolean): void;
  [MutationType.AddPath](state: State, data: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetUser](state, data) {
    state.user = data;
  },
  [MutationType.ClearUser](state) {
    state.user = {
      role: 0,
      name: "",
      token: "",
    };
  },
  [MutationType.SetLogin](state, data) {
    state.login = data;
    state.checked = true;
  },
  [MutationType.SetChecked](state, data) {
    state.checked = data;
  },
  [MutationType.AddPath](state, data) {
    state.history.push(data);
  },
};
