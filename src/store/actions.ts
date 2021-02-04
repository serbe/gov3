import { ActionContext } from "vuex";

import { Mutations } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetUser = "GET_USER",
  SetUser = "SET_USER",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetUser](context: ActionAugments): void;
  [ActionTypes.SetUser](context: ActionAugments): void;
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
