import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about-me__header">About Me</h1>
      <div className="about-me__container">
        <div className="about-me__container__summary">
          <h3>Summary</h3>
          <p>
            A software developer that is currently residing in Pretoria, South
            Africa that is passionate about learning new technologies and
            building software. Currently have knowledge using web based
            technologies to build front-end applications on the browser but
            aspires to learn also back-end technologies and become a full-stack
            developer.
          </p>
        </div>
        <div className="about-me__container__skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>BootStrap 4 / Materialize</li>
            <li>SASS / JQuery</li>
            <li>React / Redux / React Router</li>
            <li>Python</li>
            <li>Version Control (Git + GitHub)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
