import React from "react";
import "./scss/resume.scss";
import page01 from "../assets/resume-page01.png";
import page02 from "../assets/resume-page02.png";
import certifi01 from "../assets/google-certificate01.jpg";
import cvPdv from "../assets/cv.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <div className="cv">
        <div className="first-page">
          <img src={page01} alt="about me" />
        </div>
        <div className="second-page">
          <img src={page02} alt="the journey" />
        </div>
      </div>
      <div className="certificates">
        <h4 className="title">certificates</h4>
        <div className="certifi01">
          <img
            src={certifi01}
            alt="develping a business plan"
            title="google certificate"
          />
        </div>
        <div className="certifi01">
          <img
            src={certifi01}
            alt="develping a business plan"
            title="google certificate"
          />
        </div>
        <div className="certifi01">
          <img
            src={certifi01}
            alt="develping a business plan"
            title="google certificate"
          />
        </div>
      </div>
      <div className="download-resume">
        <a href={cvPdv} download>
          download resume
        </a>
      </div>
    </div>
  );
}
export default Resume;
