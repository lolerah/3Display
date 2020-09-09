import React, { Component } from "react";
import { Scene } from "./Scene";
import { NewNavMenu } from "./NewNavMenu";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

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
        <NewNavMenu />
        <div className="routing">
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                onChangeRotX={this.handleRotationX}
                onChangeRotY={this.handleRotationY}
                {...props}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={About} />
        </div>
      </div>
    );
  }
}

export default Main;
