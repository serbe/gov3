import { store } from "@/store";

import { clearStorage, getStorage, setStorage } from "@/services/storage";
import { postCheck, postLogin } from "./fetcher";

export const login = (name: string, pass: string) => {
  return postLogin(name, pass)
    .then(jsonData => {
      store.commit("SET_USER", {
        role: jsonData.r,
        name,
        token: jsonData.t,
      });
      store.commit("SET_LOGIN", true);
      store.commit("SET_CHECKED", true);
      setStorage({
        role: jsonData.r,
        name,
        token: jsonData.t,
      });
    })
    .then(() => true)
    .catch(() => {
      return false;
    });
};

export const check = () => {
  const user = store.getters.getUser;

  return postCheck(user)
    .then(jsonData => {
      return jsonData.r;
    })
    .catch(() => {
      return false;
    });
};

export const logout = (): void => {
  clearStorage();
};

export const checkStorage = () => {
  const user = getStorage();

  return postCheck(user)
    .then(jsonData => {
      if (jsonData.r) {
        store.commit("SET_CHECKED", true);
        store.commit("SET_LOGIN", true);
        store.commit("SET_USER", user);
        setStorage(user);
      } else {
        store.commit("SET_LOGIN", false);
        store.commit("SET_CHECKED", true);
        store.commit("CLEAR_USER");
        clearStorage();
      }
      return jsonData.r;
    })
    .catch(() => {
      store.commit("SET_LOGIN", false);
      store.commit("SET_CHECKED", true);
      store.commit("CLEAR_USER");
      clearStorage();
      return false;
    });
};
