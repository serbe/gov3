import { clearStorage, setStorage } from "@/services/storage";
import { MutationTree } from "vuex";

import { State } from "./state";

export enum MutationType {
  SetAuth = "SET_AUTH",
  ClearAuth = "CLEAR_AUTH",
  SetLogin = "SET_LOGIN",
  SetChecked = "SET_CHECKED",
}

export type Mutations = {
  [MutationType.SetAuth](state: State, data: State): void;
  [MutationType.ClearAuth](state: State): void;
  [MutationType.SetLogin](state: State, data: boolean): void;
  [MutationType.SetChecked](state: State, data: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetAuth](state, data) {
    setStorage(data.user);
    state = data;
  },
  [MutationType.ClearAuth](state) {
    clearStorage();
    state.user = {
      role: 0,
      name: "",
      token: "",
    };
    state.login = false;
    state.checked = false;
  },
  [MutationType.SetLogin](state, data) {
    state.login = data;
    state.checked = true;
  },
  [MutationType.SetChecked](state, data) {
    state.checked = data;
  },
};
