import { atom } from "recoil";

export const blogAtom = atom({
  key: "blogState",
  default: {
    authorId: "",
    content: "",
    id: "",
    published: false,
    publishingDate: "",
    readingTime: 1,
    tag: "",
    title: "",
  },
});
