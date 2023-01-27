import React from "react";
import Typewriter from "typewriter-effect";
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
        <div className="location">
          <span></span>
          <div className="location-info">
            <p>egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
