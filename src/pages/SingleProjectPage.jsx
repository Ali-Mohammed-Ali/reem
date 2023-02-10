import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/singleProjectPage";
function SingleProjectPage() {
  return (
    <div className="single-project-container">
      {/* start path  */}
      <div className="path">
        <div className="home">
          <Link to="/" title="Home">
            <FontAwesomeIcon icon="fa-house-chimney" />
          </Link>
        </div>
        <div className="arrow">
          <FontAwesomeIcon icon="fa-circle-right" />
        </div>
        <div className="projects-page">
          <Link to="/Projects" title="Projects Page">
            <p>blogs</p>
          </Link>
        </div>
        <div className="arrow">
          <FontAwesomeIcon icon="fa-circle-right" />
        </div>
        <div className="single-project-page">
          <Link to="/singleProjectPage">
            <p>how to be sad</p>
          </Link>
        </div>
      </div>
      {/* end path  */}page
    </div>
  );
}
export default SingleProjectPage;
