import React, { Component } from "react";
import { Routing } from "./components/Routing";
import { Main } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="container-fluid">
        <div className="row ">HEADER</div>
        <div className="row ">
          <div className="col">
            <Main />
          </div>
          <div className="col-11">
            <Routing />
          </div>
        </div>
        <div className="row ">FOOTER</div>
      </div>
    );
  }
}
