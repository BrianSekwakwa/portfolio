import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__image">image comes here</div>
      <div className="about-me__summary">
        <h1>About Me</h1>
        <p>
          A software developer that is currently residing in Pretoria, South
          Africa that is passionate about learning new technologies and building
          software. Currently have knowledge using web based technologies to
          build front-end applications on the browser but aspires to learn also
          back-end technologies and become a full-stack developer.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>BootStrap 4 / Materialize</li>
          <li>SASS / JQuery</li>
          <li>React / Redux / React Router</li>
          <li>Python</li>
          <li>Version Control ( Git + GitHub )</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
