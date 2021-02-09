export type User = {
  role: number;
  name: string;
  token: string;
};

export type State = {
  user: User;
  login: boolean;
  checked: boolean;
  history: string[];
};

export const state: State = {
  user: {
    role: 0,
    name: "",
    token: "",
  },
  login: false,
  checked: false,
  history: [],
};
