import { check } from "@/services/auth";
import { ActionContext, ActionTree } from "vuex";

import { Mutations } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  // GetUser = "GET_USER",
  // SetUser = "SET_USER",
  Check = "CHECK",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  // [ActionTypes.GetUser](context: ActionAugments): void;
  // [ActionTypes.SetUser](context: ActionAugments): void;
  [ActionTypes.Check](context: ActionAugments): void;
};

// export const actions: ActionTree<State, State> & Actions = {
//   async [ActionTypes.Check]({commit}) {
//     let checked_result = check();

//     request
//       .get("check")
//       .then((resp) => {
//         if (resp.user) {
//           const user = resp.user;
//           localStorage.setItem("user", user);
//           commit("auth_success", user);
//         } else {
//           commit("logout");
//           localStorage.removeItem("user");
//           commit("auth_error");
//         }
//         resolve(resp);
//       })
//       .catch((err) => {
//         commit("auth_error");
//         localStorage.removeItem("user");
//         commit("logout");
//         reject(err);
//       });
//   });
// }

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// export const actions: ActionTree<State, State> & Actions = {
//   async [ActionTypes.GetTaskItems]({ commit }) {
//     commit(MutationType.SetLoading, true);

//     await sleep(1000);

//     commit(MutationType.SetLoading, false);
//     commit(MutationType.SetTasks, [
//       {
//         id: 1,
//         title: "Create a new programming language",
//         description:
//           "The programing language should have full typescript support ",
//         createdBy: "Emmanuel John",
//         assignedTo: "Saviour Peter",
//         completed: false,
//         editing: false,
//       },
//     ]);
//   },

//   async [ActionTypes.SetCreateModal]({ commit }) {
//     commit(MutationType.SetCreateModal, true);
//   },
//   async [ActionTypes.SetEditModal]({ commit }) {
//     commit(MutationType.SetEditModal, { showModal: true, taskId: 1 });
//   },
// };
