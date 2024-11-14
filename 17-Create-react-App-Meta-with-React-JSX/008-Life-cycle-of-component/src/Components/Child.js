import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Child",
    };
    console.log("Child - Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Child - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Child - componentDidMount");
  }

  render() {
    console.log("Child - Render");
    return (
      <>
        <h2>{this.state.name}</h2>
      </>
    );
  }
  // this method must return true or false to render element
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child - shouldComponentUpdate");
    // console.log("---------------------------------");
    return true;
  }

  // this method return snapshot which is may used in componentDidUpdate method
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Child - getSnapshotBeforeUpdate");
    const snapshot = null;
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Child - componentDidUpdate");
    // console.log("_________________________________");
  }

  componentWillUnmount() {
    console.log("_________________________________");
    console.log("Child - componentWillUnmount");
    console.log("_________________________________");
  }
}

export default Child;
