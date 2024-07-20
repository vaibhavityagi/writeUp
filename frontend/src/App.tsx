import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import PublishBlog from "./components/PublishBlog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/publish" element={<PublishBlog />} />
          <Route path="/blogs" element={<Blogs />}>
            {/* <Route path=":id" element={}> */}
            {/* <Route path="edit" element={} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
