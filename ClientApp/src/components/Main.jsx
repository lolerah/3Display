import React, { Component } from "react";
import { Scene } from "./Scene";
import { NewNavMenu } from "./NewNavMenu";

export class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col">
            <Scene />
          </div>
          <div className="col">
            <NewNavMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
