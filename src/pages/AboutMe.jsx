import React from "react";
import Banner from "../components/banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import boat from "../assets/boat.png";
import books from "../assets/books.png";
import branding from "../assets/branding.jpg";
import advertising from "../assets/advertising.jpg";
import project from "../assets/project.jpeg";
import radwa from "../assets/radwa.jpg";
import mohammed from "../assets/mohammed.jpg";
import seo from "../assets/seo.jpg";
import "./scss/aboutme.scss";
import { Link } from "react-router-dom";
import Slider from "../components/slider/Sider";
import ClientSlider from "../components/clientSlider/ClientSlider";
function AboutMe() {
  return (
    <div className="aboutme-container">
      <Banner />
      <section className="aboutme-section">
        {/* Start Title  */}
        <div className="title">
          <h4>about me</h4>
          <span></span>
        </div>
        {/* End Title  */}
        {/* start desc  */}
        <div className="desc">
          <p>
            I'm a storyteller, and my mission is all about provoking what
            digitally suits brands andbusinesses. Digital marketing relies on
            DIGITS & TIMING, so I craft your strategy first, using my skills in
            Search Engine Optimization, copywriting, creative concepts, and
            scriptwriting for promotional videos to meet your vision with
            realistic business goals. I set out on my journey in digital
            marketing and copywriting 4+ years ago. I had what it takes to come
            up with the conceptual ideas for different types of campaigns across
            different channels, that's how I became the thinker and the doer in
            my work, and that's why my passion for uplifting your business never
            stops.
          </p>
        </div>
        {/* End desc  */}

        {/* start qoute section  */}
        <div className="qoute-section">
          <div className="img">
            <img src={boat} alt="qoute" />
          </div>
          <div className="info">
            <div className="qoute-icon">
              <FontAwesomeIcon icon="fa-quote-left" className="icon" />
            </div>
            <div className="qoute-content">
              <p>
                Creativity is the most important human resource of all. Without
                it, there would be no progress, and we would be forever
                repeating the same patterns.
              </p>
            </div>
            <div className="aurthor">
              <p>~Edward de Bono</p>
            </div>
          </div>
        </div>
        {/* end qoute section  */}
        {/* start why me section  */}
        <div className="why-me-section">
          <div className="info">
            <div className="title">
              <h4>why me ?</h4>
            </div>
            <div className="content">
              <p>
                Am I the right person for this job? -I hear you wonder. Let's be
                honest, we all got some common standards and terms that help us
                decide such thing. ​ If your standards include "the obvious
                output"(in terms of creative work and converting ads) I'm
                definitely dedicated with all my experience. ​ My life and
                interpersonal skills are what made me get here, dealing with all
                types and sizes of projects and slowly but surely, it'll get me
                there to be one of the directors that you would trust dealing
                with, again in the near future.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={books} alt="why me" />
          </div>
        </div>
        {/* end why me section  */}
        {/* start what i do  */}
        <div className="what-i-do">
          <div className="title">
            <h4>what i do ?</h4>
          </div>
          <div className="jobs">
            <div className="job-title">
              <div className="img">
                <img src={branding} alt="branding" />
              </div>
              <div className="title">
                <h5>branding</h5>
              </div>
              <div className="desc">
                <p>
                  Developing fresh ideas for content is the first step in
                  producing usable marketing materials for publishing. My active
                  and fertile imagination used to dedicate every creative
                  concept to match your marketing goals.
                </p>
              </div>
            </div>
            <div className="job-title">
              <div className="img">
                <img src={advertising} alt="advertising" />
              </div>
              <div className="title">
                <h5>advertising</h5>
              </div>
              <div className="desc">
                <p>
                  I believe that advertising is important for every aspect of a
                  business. Any ad should have main keys to match the right
                  message with the right audience and every digital marketer
                  knows that scriptwriting is on the top of content marketing
                  pros.
                </p>
              </div>
            </div>
            <div className="job-title">
              <div className="img">
                <img src={seo} alt="SEO|GOOGLE ADS" />
              </div>
              <div className="title">
                <h5>SEO|GOOGLE ADS</h5>
              </div>
              <div className="desc">
                <p>
                  I understand that every company will have different specific
                  goals in mind, but most are trying to achieve growth by
                  reaching more clients and convincing them to buy it, and in
                  your digital marketing strategy, search engine optimization is
                  a must.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end what i do  */}
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
        {/* start project section  */}
        <div className="project-section">
          <div className="title">
            <h4>recent projects</h4>
          </div>
          <div className="projects">
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="project">
                <div className="img">
                  <img src={project} alt="" />
                </div>
                <div className="info">
                  <p>biznex4</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end project section  */}
        {/* start slider  */}
        <div className="slider">
          <Slider />
        </div>
        {/* end slider  */}
        {/* start testimonials  */}
        <div className="testimonials-section">
          <div className="title">
            <h4>WHAT PEOPLE SAY ?</h4>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="info">
                <h5 className="name">Sherif Rostom</h5>
                <p className="job-title">
                  ~ HR & Board Member at BiznEX Holding
                </p>
                <p className="message">
                  Reem was a devoted, motivated, professional, hard-working and
                  creative person in our company, her performance was proven to
                  be among the most effective in our organization and we are
                  proud to have such a dedicated employee.
                </p>
              </div>
              <div className="message-icon">
                <FontAwesomeIcon icon="fa-quote-right" />
              </div>
              <div className="img" style={{ marginTop: 45 }}>
                <img src={project} alt="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="info">
                <h5 className="name">Radwa Ehab</h5>
                <p className="job-title">~ Senior Sales Consultant</p>
                <p className="message">
                  Reem is a dedicated and professional team player. optimistic,
                  engaging, and easy to get along with! It was great to have
                  such a joyful spirit in the work, I was impressed by her work
                  ethic and communication skills, Reem always shows her
                  willingness to do extra work using her different skills and
                  that's how we exceeded expectations in completing any task
                  with her.
                </p>
              </div>
              <div className="message-icon">
                <FontAwesomeIcon icon="fa-quote-right" />
              </div>
              <div className="img">
                <img src={radwa} alt="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="info">
                <h5 className="name">Mohamed Saeed</h5>
                <p className="job-title">~ Finance Account Manager</p>
                <p className="message">
                  A committed, creative, passionate, and professional
                  individual.
                </p>
              </div>
              <div className="message-icon">
                <FontAwesomeIcon icon="fa-quote-right" />
              </div>
              <div className="img" style={{ marginTop: 105 }}>
                <img src={mohammed} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* end testimonials  */}

        {/* start clients  */}
        <div className="clients-section">
          <div className="title">
            <h4>Clients</h4>
          </div>
          <div className="client-slider">
            <ClientSlider />
          </div>
        </div>
        {/* end clients  */}
      </section>
    </div>
  );
}
export default AboutMe;
