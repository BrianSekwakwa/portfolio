import React from "react";

function ToggleMenu() {
  return (
    <div className="toggle-menu">
      <ul className="toggle-menu__links">
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contacts">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default ToggleMenu;
