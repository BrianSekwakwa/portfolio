import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contacts from "./Contacts";

function Main() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
}

export default Main;
