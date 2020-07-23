import React, { Component } from "react";
import "./NavLink.css";

class NavLink extends Component {
  render() {
    return (
      <a className="nav-link" href={this.props.goTo}>
        {this.props.display}
      </a>
    );
  }
}

export default NavLink;
