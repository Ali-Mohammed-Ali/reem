import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Footer() {
  // scroll to top

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="footer-container">
      <div className="social-media">
        <div className="pintrest">
          <a
            href="https://www.pinterest.com/rdissoky/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-pinterest" className="icon" />
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://twitter.com/ReemDissoky"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon" />
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/reem-dissoky-900310184/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon" />
          </a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/reem.dissoky/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon" />
          </a>
        </div>
      </div>
      <div className="mail">
        <a
          href="mailto:reem.awad9797@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="email-icon">
            <FontAwesomeIcon icon="fa-envelope" />
          </div>
          <p>reem.awad9797@gmail.com</p>
        </a>

        <div
          className="up-button"
          onClick={scrollToTop}
          style={{ display: visible ? "flex" : "none" }}
        >
          <FontAwesomeIcon icon="fa-angle-up" className="up-icon" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
