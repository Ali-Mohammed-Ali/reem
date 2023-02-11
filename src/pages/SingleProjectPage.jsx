import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/singleprojectpage.scss";
import b3rd from "../assets/3rd.png";
import approach01 from "../assets/approach-01.webp";
import approach02 from "../assets/approach-02.webp";
import video1 from "../assets/file.mp4";
import creativeConcept from "../assets/creativeConcept.webp";
import communications from "../assets/communications.webp";
import card01 from "../assets/card01.webp";
import card02 from "../assets/card02.webp";
import card03 from "../assets/card03.webp";
import interactive from "../assets/interactive.webp";
import brochure from "../assets/brochure.pdf";
import advertorial from "../assets/advertorial.png";
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
            <p>Projects</p>
          </Link>
        </div>
        <div className="arrow">
          <FontAwesomeIcon icon="fa-circle-right" />
        </div>
        <div className="single-project-page">
          <Link to="/singleProjectPage">
            <p>BiznEX</p>
          </Link>
        </div>
      </div>
      {/* end path  */}
      <div className="our-challenge">
        <div className="info">
          <h4>Our Challenge</h4>
          <p>
            All businesses experienced a regression in the last few months
            before the event, so they didn’t feel safe in investing by any mean.
            ​ BiznEX uses government ministries presence to encourage their
            business and elevate their exposure. ​ When we approached BiznEX
            expo, it has a history in being in the market for so many years, but
            just 2 years in executing outstanding event, and it had very little
            branding to date. ​ So we intervened when the event was in public
            launch-phase of its 3rd edition, it was seeking guidance on all
            things related to the brand, especially in messaging. ​ At event
            launch, we aimed to address accurate communication of the event
            mission, and the merger of 2020 regression and the brand vision
          </p>
        </div>
        <div className="img">
          <img src={b3rd} alt="3rd" />
        </div>
      </div>
      <div className="our-approach">
        <div className="info">
          <h4>Our Approach</h4>
          <p>
            I worked closely with the design team to create a new brand identity
            and logotype that better conveys the values behind executing the
            event despite all the circumstances, so we communicated to a broader
            target audience as savers for their businesses, with the aim of
            building a trust in the brand.
          </p>
        </div>
        <div className="img">
          <img src={approach01} alt="BiznEX 3rd" />
          <img src={approach02} alt="BiznEX 3rd" />
        </div>
        <div className="info-02">
          <p>
            The new brand embodies the attributes of consistency, relevancy,
            credibility, and appealing. ​ We are going to take an advantage from
            the fears of the target audience who are business owners and
            entrepreneurs and deliver them a message to take a step forward and
            consider every business opportunity. ​ We want to urge them on never
            forgetting one of 2020 lessons; Don’t be satisfied with having
            ongoing business but invest in the time you think you are safe and
            strive more business opportunities in a position of strength after
            weakness.
          </p>
        </div>
        <div className="video">
          <video
            src={video1}
            width="1000"
            controls="controls"
            autoplay="true"
            muted
          />
        </div>
      </div>
      <div className="creative-concept">
        <div className="info">
          <h4>CreativE Concept</h4>
          <p>
            We used elements to express the expo identity and indicates that
            BiznEX 2020 event is contributing to the investment world with the
            goal of capturing expansion and growth opportunities.
          </p>
        </div>
        <div className="img">
          <img src={creativeConcept} alt="3rd" />
        </div>
      </div>
      <div className="communications">
        <div className="info">
          <h4>Communications</h4>
          <span>
            We linked BiznEX role with the government vision in Egypt, to give
            the brand the exposure it needs, building a brand promise and
            delivering it.
          </span>
          <p>
            “Yesterday” referring to 2020 year, it was disappointing, and
            tomorrow is always promising to hunt the next opportunity, so we
            used “tomorrow” in the event slogan to be promising enough to
            indicate that the event is the recovery for every entrepreneur.
          </p>
        </div>
        <div className="img">
          <img src={communications} alt="Communications" />
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={card01} alt="" />
          </div>
          <div className="title">
            <p>Commercial Zone</p>
            <span>[ GROWTH ]</span>
          </div>
          <div className="desc">
            <p>
              A various collection of commercial brands target the expo to
              expose and meet with potential buyers and likeminded investors for
              franchising, exporting and partnership opportunities through
              representatives from Middle East, Gulf and European countries.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={card02} alt="" />
          </div>
          <div className="title">
            <p>services providers </p>
            <span>[ SUPPORT ]</span>
          </div>
          <div className="desc">
            <p>
              Dozens of service providers and experts are motivated to support
              other entities with the best service quality, along with superior
              customer experience.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={card03} alt="" />
          </div>
          <div className="title">
            <p>Real Estate Zone</p>
            <span>[ TIMELESS ]</span>
          </div>
          <div className="desc">
            <p>
              Where any business will get the exposure it needs, which brings
              together top-level real estate professionals and provide an
              end-to-end service.
            </p>
          </div>
        </div>
      </div>
      <div className="interactive">
        <div className="info">
          <h4>interactive</h4>
          <span>The social media strategy focused on 3 platforms</span>
          <p>
            - Facebook was the main platform in the lead generation<br></br> -
            Linkedin is the main platform in the awareness and lead generation
            phase, as it’s completely B2B<br></br> - Instagram was just for
            awareness with educational content ​
          </p>
        </div>
        <div className="img">
          <img src={interactive} alt="interactive" />
        </div>
      </div>
      <div className="advertorial">
        <div className="info">
          <h4>Advertorial & Marketing Materials</h4>
          <span>
            Built on the new logo, we were tasked with creating catalogue and
            printed materials around the theme: BiznEX is continuing in evolving
            businesses over the history.
          </span>
          <a href={brochure} download>
            download BiznEX 3rd brochure
          </a>
        </div>
        <div className="img">
          <img src={advertorial} alt="interactive" />
        </div>
      </div>
    </div>
  );
}
export default SingleProjectPage;
