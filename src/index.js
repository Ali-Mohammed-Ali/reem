import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faPinterest,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelope,
  faAngleUp,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter } from "react-router-dom";

library.add(
  fab,
  faBars,
  faPinterest,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faEnvelope,
  faAngleUp,
  faQuoteLeft,
  faQuoteRight
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
