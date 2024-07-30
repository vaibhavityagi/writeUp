import { atom } from "recoil";

export const userAtom = atom({
  key: "userState",
  default: {
    id: "",
    email: "",
    name: "",
    password: "",
    bio: "",
  },
});
