import React, { Component } from "react";

class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ComponentB",
    };
  }

  componentDidMount() {}

  render() {
    console.log("ComponentB Render");
    return (
      <>
        <h2>{this.state.name}</h2>
      </>
    );
  }
}

export default ComponentB;
