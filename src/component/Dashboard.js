import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="heading">5-Day Weather Forecast</h1>
        </header>
    <span> {this.props.city}</span>
      </div>
    );
  }
}
