import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container container-fluid">
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-success btn-sm"
              onClick={() => this.props.onChangeRotX(true)}
            >
              + Rotation X
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-success btn-sm"
              onClick={() => this.props.onChangeRotY(true)}
            >
              + Rotation Y
            </button>
          </div>
        </div>
        <div className="row row-m-t">
          <div className="col">
            <button
              className="btn btn-danger btn-sm "
              onClick={() => this.props.onChangeRotX(false)}
            >
              - Rotation X
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onChangeRotY(false)}
            >
              - Rotation Y
            </button>
          </div>
        </div>
      </div>
    );
  }
}
