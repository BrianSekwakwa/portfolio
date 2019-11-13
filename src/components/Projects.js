import React from "react";
import projects_data from "../json_data/projects_data.json";

function Projects() {
  console.log(projects_data);
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__card-group">
        <div className="projects__card-group__card-item">one</div>
        <div className="projects__card-group__card-item">two</div>
        <div className="projects__card-group__card-item">three</div>
        <div className="projects__card-group__card-item">four</div>
        <div className="projects__card-group__card-item">five</div>
        <div className="projects__card-group__card-item">six</div>
      </div>
    </div>
  );
}

export default Projects;
