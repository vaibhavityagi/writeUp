import { useRecoilState } from "recoil";
import { newBlogAtom } from "../store/atoms/newBlog";
import { ChangeEvent } from "react";

export default function PublishBlog() {
  const [newBlogInput, setNewBlogInput] = useRecoilState(newBlogAtom);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log([evt.target.name]);
    setNewBlogInput({
      ...newBlogInput,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBlogInput.title}
        id="content"
        onChange={handleChange}
      />
      <textarea
        name="content"
        id="content"
        value={newBlogInput.content}
        placeholder="Tell your story"
        onChange={handleChange}
      ></textarea>
      <button
        onClick={() => {
          console.log();
        }}
      >
        Publish
      </button>
    </div>
  );
}
