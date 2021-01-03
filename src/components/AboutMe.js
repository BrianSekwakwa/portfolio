import React from "react";

function AboutMe() {
  return (
    <div id="about" className="about-me">
      <h1 className="about-me__header">About Me</h1>
      <div className="about-me__summary">
        <p>
          A software developer that is currently residing in Pretoria, South
          Africa that is passionate about learning new technologies and building
          software. Currently have knowledge using web based technologies to
          build full-stack applications on the web.
        </p>
      </div>
      <div className="about-me__skills">
        <div>
          <h3>Front End</h3>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>Bootstrap 4 / Materialize</li>
            <li>SASS / SCSS</li>
            <li>React / Redux / React Router</li>
          </ul>
        </div>
        <div>
          <h3>Back End</h3>
          <ul>
            <li>Node.js / Express.js</li>
            <li>Mongo / Mongoose.js</li>
          </ul>
        </div>
        <div>
          <h3>Others</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>JQuery</li>
            <li>Python 3</li>
            <li>Version Control (Git + GitHub)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
