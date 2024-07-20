import { atom } from "recoil";

export const newBlogAtom = atom({
  key: "newBlogState",
  default: {
    title: "",
    content: "",
  },
});
