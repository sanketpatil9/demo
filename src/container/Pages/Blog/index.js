import React from "react";
import "./Blog.css";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
// '../../../component/Header'

const Blog = () => {
    return (
      <div className="bg-info">
        {/* <Header /> */}
        <h1 className="$primaryColor text-danger">This is the Blog page</h1>
        <Footer />
      </div>
    );
  };

export default Blog;
