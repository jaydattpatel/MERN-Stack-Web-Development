import React, { Component } from "react";
// import ComponentB from './ComponentB';

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ComponentA",
      data: [],
    };
  }

  componentDidMount() {
    // this.setState({ name: "ComponentA" });
    // "https://jsonplaceholder.typicode.com/users"  original API
    fetch("https://jsonplaceholder.typicode.com/usr")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return <li>{d.username}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default ComponentA;
