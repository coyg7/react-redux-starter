import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/styles.css";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
