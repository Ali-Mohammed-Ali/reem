import React, { useState } from "react";
import "./nav.scss";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Reem Dissoky" title="Reem Dissoky" />
        </Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>
              about me
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              className={splitLocation[1] === "Resume" ? "active" : ""}
            >
              resume
            </Link>
          </li>

          <li>
            <Link
              to="/Projects"
              className={splitLocation[1] === "Projects" ? "active" : ""}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className={splitLocation[1] === "Blog" ? "active" : ""}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              to="/ContactMe"
              className={splitLocation[1] === "ContactMe" ? "active" : ""}
            >
              contact me
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={handleOpen}>
        <FontAwesomeIcon icon="fa-bars" />
      </div>
      {open ? (
        <div className="menu">
          <ul className={open ? "list" : ""}>
            <li>
              <Link to="/">about me</Link>
            </li>
            <li>
              <Link to="/Resume">resume</Link>
            </li>

            <li>
              <Link to="/Projects">projects</Link>
            </li>
            <li>
              <Link to="/Blog">blog</Link>
            </li>
            <li>
              <Link to="/ContactMe">contact me</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Nav;
