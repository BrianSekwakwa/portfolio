import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__image">image comes here</div>
      <div className="about-me__summary">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque
          soluta eos quia odit eaque. Odio amet praesentium officiis molestias
          repellat dolor necessitatibus provident? Facilis dolore consequatur
          perferendis, earum dolor ipsum blanditiis! Nemo, cupiditate magni cum
          laudantium eveniet ex, natus suscipit odio, rerum molestias accusamus
          ea? Maiores asperiores quia quos.
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
