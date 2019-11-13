import React from "react";
import projects_data from "../json_data/projects_data.json";

function Projects() {
  const { data } = projects_data;
  const cards = data.map(item => {
    return (
      <div key={item.id} className="projects__card-group__card-item">
        {item.title}
      </div>
    );
  });

  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__card-group">{cards}</div>
    </div>
  );
}

export default Projects;
