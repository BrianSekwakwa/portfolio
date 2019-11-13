import React from "react";
import { Link } from "react-router-dom";

function ProjectNavigation() {
  return (
    <div className="project-navigation">
      <div className="project-navigation__fixed">
        <span className="project-navigation__fixed__logo">Logo</span>
        <ul className="project-navigation__fixed__links">
          <Link to="/" className="route-link">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default ProjectNavigation;
