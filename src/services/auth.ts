import { useStore } from "vuex";

import { clearStorage, getStorage } from "@/services/storage";

const loginURL = process.env.VUE_APP_LOGINURL || "/go/login";
const checkURL = process.env.VUE_APP_CHECKURL || "/go/check";

export interface CJson {
  r: boolean;
}

interface TJson {
  t: string;
  r: number;
}

export const login = (name: string, pass: string): void => {
  fetch(loginURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ u: name, p: btoa(pass) }),
  })
    .then(response => response.json())
    .then(response => response as TJson)
    .then(jsonData => {
      const store = useStore();
      store.commit("SetAuth", {
        user: {
          role: jsonData.r,
          name,
          token: jsonData.t,
        },
        check: true,
        login: true,
      });
    });
};

export const check = () => {
  const store = useStore();
  const user = store.getters.getUser;

  return fetch(checkURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ t: user.token, r: user.role }),
  })
    .then(response => response.json())
    .then(response => response as CJson)
    .then(jsonData => {
      return jsonData.r;
    });
};

export const logout = (): void => {
  clearStorage();
};

export const checkStorage = (): void => {
  const user = getStorage();

  fetch(checkURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{ "t": "${user.token}", "r": ${user.role} }`,
  })
    .then(response => response.json())
    .then(response => response as CJson)
    .then(jsonData => {
      const store = useStore();
      if (jsonData.r) {
        store.commit("SetLogin", true);
        store.commit("SetChecked", true);
      } else {
        store.commit("SetLogin", false);
        store.commit("SetChecked", true);
      }
    });
};
