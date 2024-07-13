import { atom } from "recoil";

export const signupAtom = atom({
  key: "signUpState",
  default: {
    username: "",
    email: "",
    password: "",
  },
});
