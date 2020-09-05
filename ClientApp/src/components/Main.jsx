import React, { Component } from "react";
import { Scene } from "./Scene";
import { NewNavMenu } from "./NewNavMenu";
//import { Routing } from "./Routing";
import { Home } from "./Home";
import "./Main.css";

export class Main extends Component {
  state = {
    rotX: 0.0,
    rotY: 0.0,
  };

  handleRotationX = (increase) => {
    const rotX = increase ? 0.01 : -0.01;
    this.setState({ rotX, rotY: 0.0 });
  };

  handleRotationY = (increase) => {
    const rotY = increase ? 0.01 : -0.01;
    this.setState({ rotX: 0.0, rotY });
  };

  render() {
    const { rotX, rotY } = this.state;
    return (
      <div className="col">
        <div className="scene">
          <Scene rotX={rotX} rotY={rotY} />
        </div>
        <div className="navbar">
          <NewNavMenu />
        </div>
        <div className="routing">
          <Home
            onChangeRotX={this.handleRotationX}
            onChangeRotY={this.handleRotationY}
          />
        </div>
      </div>
    );
  }
}

export default Main;
