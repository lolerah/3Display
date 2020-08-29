import React, { Component } from "react";
import { Main } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{ backgroundColor: "gold" }}>
              HEADER
            </div>
          </div>
          <div className="row">
            <Main />
          </div>
          <div className="row">
            <div className="col" style={{ backgroundColor: "teal" }}>
              FOOT
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
