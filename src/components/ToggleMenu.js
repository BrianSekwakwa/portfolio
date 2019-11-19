import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class ToggleMenu extends Component {
  constructor() {
    super();
    this.toggle_menu = document.getElementsByClassName("toggle-menu");
  }

  handleClick = e => {
    this.toggle_menu[0].classList.toggle("reveal");
  };

  render() {
    return (
      <div className="toggle-menu">
        <ul className="toggle-menu__links">
          <AnchorLink onClick={this.handleClick} href="#home">
            <li>Home</li>
          </AnchorLink>
          <AnchorLink onClick={this.handleClick} href="#about">
            <li>About</li>
          </AnchorLink>
          <AnchorLink offset="50" onClick={this.handleClick} href="#projects">
            <li>Projects</li>
          </AnchorLink>
          <AnchorLink onClick={this.handleClick} href="#contacts">
            <li>Contact</li>
          </AnchorLink>
        </ul>
      </div>
    );
  }
}

export default ToggleMenu;
