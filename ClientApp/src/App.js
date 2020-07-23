import React, { Component } from "react";
import { NewNavMenu } from "./components/NewNavMenu";
import { Routing } from "./components/Routing";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm col-md-7">
            <NewNavMenu />
          </div>
          <div className="col-11">
            <Routing />
          </div>
        </div>
      </div>
    );
  }
}
