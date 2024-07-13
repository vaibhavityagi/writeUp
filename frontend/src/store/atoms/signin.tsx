import { atom } from "recoil";

export const signinAtom = atom({
  key: "signInState",
  default: {
    email: "",
    password: "",
  },
});
