import React from "react";
import "./scss/blog.scss";
import blog from "../assets/blog.jpeg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blog-container">
      <h4>Blogs</h4>
      <div className="blogs">
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog">
          <div className="blog">
            <div className="img">
              <img src={blog} alt="" />
            </div>
            <div className="info">
              <h5>how to be sad</h5>
              <p>describe how to be sad in ten sec without root...</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Blog;
