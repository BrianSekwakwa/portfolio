import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Contacts from "./Contacts";
import Divide from "./Divide";
import { Link } from "react-router-dom";

function AboutProject(props) {
  console.log(props);
  let details;
  if (props.location.state) {
    const {
      image_name,
      project_link,
      project_repo,
      summary,
      tech_used,
      title
    } = props.location.state;

    details = (
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
    );
  } else {
    details = (
      <div className="error">
        <p className="error__emoji">):</p>
        <p className="error__message">
          Something went wrong.{" "}
          <Link className="error__message__link" to="/">
            Go back.
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="about-project-container">
      <ProjectNavigation />
      {details}
      <Divide />
      <Contacts />
    </div>
  );
}

export default AboutProject;
