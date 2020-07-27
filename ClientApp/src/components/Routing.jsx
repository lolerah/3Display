import React, { Component } from "react";
import { Route } from "react-router";
import { Home } from "./Home";
import { FetchData } from "./FetchData";
import { Counter } from "./Counter";
import { About } from "./About";
import { Scene } from "./Scene";

export class Routing extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/counter" component={Counter} />{" "}
        <Route path="/about" component={About} />
        {/*<Route path="/visualisation" component={Visualisation} />
      <Route path="/contact" component={Contact} />*/}
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/visualisation" component={Scene} />
      </div>
    );
  }
}

export default Routing;
