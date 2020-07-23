import React, { Component } from "react";
import NavLink from "./NavLink";
import "./NewNavMenu.css";

export class NewNavMenu extends Component {
  render() {
    return (
      <nav className="nav justify-content-center">
        <NavLink goTo="/" display="Home" />
        <NavLink goTo="/visualisation" display="Visualisation" />
        <NavLink goTo="/about" display="About Project" />
        <NavLink goTo="/contact" display="Contact" />
      </nav>
    );
  }
}

export default NewNavMenu;
