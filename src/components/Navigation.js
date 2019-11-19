import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navigation extends Component {
  constructor() {
    super();
    this.toggle_menu = document.getElementsByClassName("toggle-menu");
  }
  handleClick = e => {
    this.toggle_menu[0].classList.toggle("reveal");
  };

  render() {
    return (
      <div className="navigation">
        <div className="navigation__fixed">
          <span className="navigation__fixed__logo">
            <i className="fas fa-laptop-code"></i>
          </span>
          <ul className="navigation__fixed__links">
            <AnchorLink href="#home">
              <li>Home</li>
            </AnchorLink>
            <AnchorLink href="#about">
              <li>About</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#projects">
              <li>Projects</li>
            </AnchorLink>
            <AnchorLink href="#contacts">
              <li>Contact</li>
            </AnchorLink>
          </ul>
          <div
            className="navigation__fixed__menu-bar"
            onClick={this.handleClick}
          >
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
