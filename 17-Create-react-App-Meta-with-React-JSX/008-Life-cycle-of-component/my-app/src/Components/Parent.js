/*
https://www.w3schools.com/react/react_lifecycle.asp
---------------------------------------------
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.
---------------------------------------------
Mounting: 
Mounting means putting elements into the DOM.
React has four built-in methods that gets called, in this order, when mounting a component:

step-1 :constructor()
step-2 :getDerivedStateFromProps()
step-3 :render()
step-4 :componentDidMount()

The render() method is required and the others are optional and will be called if you define them. The setState() method must not in constructor,getDerivedStateFromProps and render methods.

- constructor
The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

- getDerivedStateFromProps
The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props.

- render
The render() method is required, and is the method that actually outputs the HTML to the DOM.

- componentDidMount
The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

----------------------------------
Updating:

The next phase in the lifecycle is when a component is updated.
A component is updated whenever there is a change in the component's state or props.
React has five built-in methods that gets called, in this order, when a component is updated:

step-1 : getDerivedStateFromProps()
step-2 : shouldComponentUpdate()
step-3 : render()
step-4 : getSnapshotBeforeUpdate()
step-5 : componentDidUpdate()

- getDerivedStateFromProps
Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

- shouldComponentUpdate
In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

- getSnapshotBeforeUpdate
In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

- componentDidUpdate
The componentDidUpdate method is called after the component is updated in the DOM.
----------------------------------
Unmounting:
The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()
*/

import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Parent",
      data: [],
      compB: true,
    };
    console.log("Parent - Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Parent - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
    console.log("_________________________________");

    // this.setState({ name: "Parent" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  removeHandler() {
    this.setState({ compB: false });
  }

  render() {
    console.log("Parent - Render");
    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d, i) => {
            return <li key={i}>{d.username}</li>;
          })}
        </ul>
        {this.state.compB ? (
          <>
            <Child />
            <button onClick={this.removeHandler.bind(this)}>
              Unmount Child
            </button>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }

  // this method must return true or false to render element
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent - shouldComponentUpdate");
    // console.log("---------------------------------");
    return true;
  }

  // this method return snapshot which is may used in componentDidUpdate method
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Parent - getSnapshotBeforeUpdate");
    const snapshot = null;
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent - componentDidUpdate");
    console.log("_________________________________");
  }

  componentWillUnmount() {
    console.log("_________________________________");
    console.log("Parent - componentWillUnmount");
    console.log("_________________________________");
  }
}

export default Parent;
