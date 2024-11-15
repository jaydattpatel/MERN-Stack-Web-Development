/*
author: jaydatt
React useState, useRef

-----------------------------------
useState : State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

syntax : const [state, setStateFunction] = useState(initialState)
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
import { useState, useRef } from "react";

// defining app component
function App() {
  // using useState in function component instead of state and setState in class
  const [name, setName] = useState("Harry");
  const [lastName, setLastname] = useState("Potter");

  const nameRef = useRef(null);
  const lastnameRef = useRef(null);

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
