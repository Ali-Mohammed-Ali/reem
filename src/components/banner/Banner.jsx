import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./banner.scss";
function Banner() {
  return (
    <div className="banner-container">
      <div className="info">
        <h3>i am reem dissoky </h3>
        <h2>
          <Typewriter
            options={{
              strings: ["digital marketer", "seo", "creative copywriter"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        {/* start buttons  */}
        <div className="buttons">
          <div className="resume">
            <Link to="/Resume">resume</Link>
          </div>
          <div className="project">
            <Link to="/Projects">projects</Link>
          </div>
        </div>
        {/* end buttons  */}
      </div>
    </div>
  );
}
export default Banner;
