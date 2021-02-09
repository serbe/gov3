import { ActionContext, ActionTree } from "vuex";
// import { clearStorage, getStorage, setStorage } from "@/services/storage";

import { Mutations } from "./mutations";
import { State } from "./state";
// import { postCheck } from "@/services/fetcher";

export enum ActionTypes {}
// GetUser = "GET_USER",
// SetUser = "SET_USER",
// Check = "CHECK",
// GetPath = "GET_PATH",

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  // [ActionTypes.GetUser](context: ActionAugments): void;
  // [ActionTypes.SetUser](context: ActionAugments): void;
  // [ActionTypes.Check](context: ActionAugments): void;
  // [ActionTypes.GetPath](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  // async [ActionTypes.Check]({ commit }) {
  //   const user = getStorage();
  //   return postCheck(user)
  //     .then(jsonData => {
  //       if (jsonData.r) {
  //         commit(MutationType.SetChecked, true);
  //         commit(MutationType.SetLogin, true);
  //         commit(MutationType.SetUser, user);
  //         setStorage(user);
  //       } else {
  //         commit(MutationType.SetChecked, true);
  //         commit(MutationType.SetLogin, false);
  //         commit(MutationType.ClearUser, undefined);
  //         clearStorage();
  //       }
  //     })
  //     .catch(() => {
  //       commit(MutationType.SetChecked, true);
  //       commit(MutationType.SetLogin, false);
  //       clearStorage();
  //     });
  // },
};

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
