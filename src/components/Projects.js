import React from "react";
import projects_data from "../json_data/projects_data.json";
import clearview from "../images/clearview.png";
import pixabay from "../images/pixabay.png";
import movies from "../images/movies.png";
import marvel from "../images/marvel.png";
import memories from "../images/memories.png";
import stories from "../images/our-stories.png";
import { Link } from "react-router-dom";

function Projects() {
  const { data } = projects_data;
  const imageObject = {
    clearview: clearview,
    pixabay: pixabay,
    movies: movies,
    marvel: marvel,
    memories: memories,
    stories: stories,
  };
  const cards = data.map((item) => {
    return (
      <Link
        to={{
          pathname: "/AboutProject",
          state: {
            title: item.title,
            summary: item.summary,
            image_name: item.image_name,
            tech_used: item.tech_used,
            project_repo: item.project_repo,
            project_link: item.project_link,
          },
        }}
        key={item.id}
      >
        <div className="projects__card-group__card-item">
          <span>{item.title}</span>
          <img src={imageObject[item.image_name]} alt="project" />
        </div>
      </Link>
    );
  });

  return (
    <div id="projects" className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__card-group">{cards}</div>
    </div>
  );
}

export default Projects;
