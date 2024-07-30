import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { blogAtom } from "../store/atoms/blog";
import { userAtom } from "../store/atoms/user";
import AuthorCard from "../components/AuthorCard";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useRecoilState(blogAtom);
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    // blog details
    axios
      .get(`http://localhost:8787/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlog(res.data.post);
      })
      .then(() => {
        console.log(blog.authorId);
        // user details
        axios
          .get(`http://localhost:8787/api/v1/user/${blog.authorId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res);
            setUser(res.data.user);
          });
      });
  }, []);

  return (
    <div>
      <div>
        <div>{JSON.stringify(user)}</div>
        <BlogCard
          title={blog.title}
          content={blog.content}
          readingTime={blog.readingTime}
          tag={blog.tag}
          publishingDate={blog.publishingDate}
        />
        <AuthorCard name={user.name} bio={user.bio} />
      </div>
    </div>
  );
}
