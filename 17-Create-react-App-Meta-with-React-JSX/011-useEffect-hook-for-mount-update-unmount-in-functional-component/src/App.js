/*
author: jaydatt
React useState, useEffect, useRef

-----------------------------------
useState : State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

syntax : const [state, setStateFunction] = useState(initialState)
-----------------------------------
useEffect : useEffect can be use in function component as componentDidMount, componentDidUpdated, componentWillUnmount same as class. Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

syntax : useEffect(setupFunction, [dependencies]?)
-----------------------------------
useRef : useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const refNode = useRef(initialValue)

    function Main(){
      return (<input ref={refNode} type="email">Email</input>);
    }
    console.log(refNode.current)
    console.log(refNode.current.property)

  Here refNode.current is node element which is referencing and you can access properties of node using refNode.current.property
*/
import "./App.css";
import { useState, useEffect, useRef } from "react";

// defining app component
function App() {
  // using useState in function component instead of state and setState in class
  const [name, setName] = useState("Harry");
  const [lastName, setLastname] = useState("Potter");

  const nameRef = useRef(null);
  const lastnameRef = useRef(null);

  // using useEffect in function component instead of componentDidMount with componentWillUnmount in class
  useEffect(() => {
    // code for componentDidMount
    console.log("component Mount");

    //return function as componentWillUnmount
    return () => {
      console.log("Component UnMount");
    };
  }, []); // passing empty array dependencies to use as componentDidMount

  // use useEffect as componentDidUpdated
  useEffect(() => {
    // code for componentDidUpdated
    console.log("Component updated");
  });

  // re-render only when dependencies changes
  useEffect(() => {
    document.title = name;
  }, [name]); // passing array dependencies to use as componentDidMount and re-render only when dependencies changes

  // re-render only when dependencies changes
  useEffect(() => {
    document.title = lastName;
  }, [lastName]); // passing array dependencies to use as componentDidMount and re-render only when dependencies changes

  // using useEffect as componentDidMount or componentDidUpdated with componentWillUnmount
  useEffect(() => {
    console.log("Timer Start");
    const timer = setInterval(() => {
      console.log("Timer log");
    }, 2000);

    //return function as componentWillUnmount
    return () => {
      clearInterval(timer);
      console.log("Timer Cleared.");
    };
  }, []); // passing empty array dependencies to use as componentDidMount

  function clearInputs() {
    nameRef.current.value = "";
    lastnameRef.current.value = "";
    setName("");
    setLastname("");
  }

  return (
    <>
      <div className="section">
        <Row label="Name">
          {/* passing children element */}
          <input
            className="input"
            value={name}
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastName}
            ref={lastnameRef}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Row>
        <button onClick={clearInputs}>Clear</button>
      </div>
      <h2>Hello, {name + " " + lastName}</h2>
    </>
  );
}

function Row(props) {
  return (
    <>
      <label>
        {props.label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}

export default App;
