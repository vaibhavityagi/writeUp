import { ChangeEvent, useState } from "react";
import { CreatePostInput } from "@vaibhavicodes/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PublishBlog() {
  const [blogInput, setBlogInput] = useState<CreatePostInput>({
    title: "",
    content: "",
    readingTime: 1,
    tag: "TECHNICAL",
  });
  const navigate = useNavigate();

  const handleChange = (
    evt:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setBlogInput({
      ...blogInput,
      [evt.target.name]: evt.target.value,
    });
  };

  const createNewBlog = async () => {
    try {
      console.log(blogInput);
      const res = await axios.post(
        "http://localhost:8787/api/v1/blog",
        blogInput,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      navigate(`/blog/${res.data.id}`);
    } catch (err) {
      console.log("Error while creating a new blog: ", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={blogInput.title}
        id="content"
        onChange={handleChange}
      />
      <textarea
        name="content"
        id="content"
        value={blogInput.content}
        placeholder="Tell your story"
        onChange={handleChange}
      ></textarea>
      <label htmlFor="readingTime">Estimated reading time</label>
      <input
        type="number"
        name="readingTime"
        id="readingTime"
        min={0}
        onChange={handleChange}
        value={blogInput.readingTime}
      />
      <select name="tag" id="tag" value={blogInput.tag} onChange={handleChange}>
        <option value="TECHNICAL">Technical</option>
        <option value="INSPIRATIONAL">Inspirational</option>
        <option value="DSA">DSA</option>
        <option value="OTHER">Other</option>
      </select>
      <button onClick={createNewBlog}>Publish</button>
    </div>
  );
}
