import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Contacts from "./Contacts";
import Divide from "./Divide";

function AboutProject() {
  return (
    <div className="about-project-container">
      <ProjectNavigation />
      <div className="about-project">
        <div className="about-project__image">images goes here</div>
        <div className="about-project__details">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
            vero quis ratione accusamus aperiam iure neque, minus nihil officia?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            quis voluptas ullam accusantium assumenda quae, ducimus mollitia
            sequi? Odit, magnam!
          </p>
          <p>HTML,CSS,JavaScript</p>
          <div className="about-project__details__links">
            <a href="#">View Project</a>
            <a href="#">View Repo</a>
          </div>
        </div>
      </div>
      <Divide />
      <Contacts />
    </div>
  );
}

export default AboutProject;
