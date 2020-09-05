import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <button
          className="btn btn-success btn-sm mr-2"
          onClick={() => this.props.onIncreaseRotX()}
        >
          Speed Up Rotation X
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onIncreaseRotY()}
        >
          Speed Up Rotation Y
        </button>
      </div>
    );
  }
}
