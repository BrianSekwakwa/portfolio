import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Contacts from "./Contacts";
import Divide from "./Divide";
import { Link } from "react-router-dom";
import movies from "../images/movies.png";
import marvel from "../images/marvel.png";
import pixabay from "../images/pixabay.png";
import clearview from "../images/clearview.png";
import memories from "../images/memories.png";
import stories from "../images/our-stories.png";

function AboutProject(props) {
  let details;
  if (props.location.state) {
    // Destructuring and getting properties from the state
    const {
      image_name,
      project_link,
      project_repo,
      summary,
      tech_used,
      title,
    } = props.location.state;

    // Objects for gif images
    const imageObject = {
      movies: movies,
      marvel: marvel,
      memories: memories,
      stories: stories,
      pixabay: pixabay,
      clearview: clearview,
    };
    details = (
      <div className="about-project">
        <img
          className="about-project__image"
          src={imageObject[image_name]}
          alt="project png"
        />
        <div className="about-project__details">
          <h1>{title}</h1>
          <p>{summary}</p>
          <p>{tech_used}</p>
          <div className="about-project__details__links">
            <a href={project_link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a href={project_repo} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    details = (
      <div className="error">
        <p className="error__emoji">
          <i className="far fa-frown"></i>
        </p>
        <p className="error__message">
          Something went wrong.
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
