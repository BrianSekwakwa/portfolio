import React from "react";
import Navigation from "./Navigation";
import ToggleMenu from "./ToggleMenu";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Divide from "./Divide";

function Main() {
  return (
    <div>
      <Navigation />
      <ToggleMenu />
      <Home />
      <Divide />
      <AboutMe />
      <Projects />
      <Divide />
      <Contacts />
    </div>
  );
}

export default Main;
