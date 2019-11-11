import React, { Component } from "react";

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
          <span className="navigation__fixed__logo">Logo</span>
          <ul className="navigation__fixed__links">
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
