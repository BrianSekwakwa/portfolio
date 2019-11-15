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
          <h1>{title}</h1>
          <p>{summary}</p>
          <p>{tech_used}</p>
          <div className="about-project__details__links">
            <a href={project_link}>View Project</a>
            <a href={project_repo}>View Repo</a>
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
