import React, { Component } from "react";
import { Scene } from "./Scene";
import { NewNavMenu } from "./NewNavMenu";
import { Routing } from "./Routing";
import "./Main.css";

export class Main extends Component {
  render() {
    return (
      <div className="col">
        <div className="scene">
          <Scene />
        </div>
        <div className="navbar">
          <NewNavMenu />
        </div>
        <div className="routing">
          <Routing />
        </div>
      </div>
    );
  }
}

export default Main;
