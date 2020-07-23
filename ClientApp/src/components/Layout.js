import React, { Component } from "react";
import { Container } from "reactstrap";
//import { NavMenu } from "./NavMenu";
import NewNavMenu from "./NewNavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NewNavMenu />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
