import React from "react";
import "./scss/contactme.scss";
import Cup from "../assets/cup.png";
function ContactMe() {
  return (
    <div className="contactme-container">
      <h4>Let's Talk</h4>
      <form>
        <div className="names">
          <div className="name">
            <label htmlFor="firstName">first name</label>
            <br />
            <input type="text" id="firstName" required />
          </div>
          <div className="name">
            <label htmlFor="lastName">last name</label>
            <br></br>
            <input type="text" id="lastName" required />
          </div>
        </div>
        <div className="email-subject">
          <div className="email">
            <label htmlFor="email">email</label>
            <br />
            <input type="text" id="email" required />
          </div>
          <div className="subject">
            <label htmlFor="subject">subject</label>
            <br />
            <input type="text" id="subject" />
          </div>
        </div>
        <div className="message">
          <label htmlFor="message">message</label>
          <br />
          <textarea type="text" id="message" />
        </div>
        <button type="submit" className="send">Send</button>
        <div className="img">
          <img src={Cup} alt="Let's Talk" />
        </div>
      </form>
      <a href="tel:+2011 44 200 465">call me</a>
    </div>
  );
}
export default ContactMe;
