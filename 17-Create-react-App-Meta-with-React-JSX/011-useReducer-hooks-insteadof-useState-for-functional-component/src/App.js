/*
author: jaydatt

React useReducer
------------------------------------
useReducer is a React Hook that lets you add a reducer to your component.
useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.

syntax : 
const [state, dispatch] = useReducer(reducer, initialArg, init?)

Parameters:

dispatch: The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render.

reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.

initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.

optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).


*/
import "./App.css";
import { useEffect, useReducer } from "react";

// state is currentState for Read-only. action is argument data for new state.
function reducerForUpdate(state, action) {
  // state is currentState for Read-only so copy data.
  const newState = { ...state };
  switch (action.type) {
    case "name":
      newState.name = action.data;
      return newState;

    case "lastName":
      newState.lastName = action.data;
      return newState;

    default:
      break;
  }
}

// defining app component
function App() {
  const [person, dispatch] = useReducer(reducerForUpdate, {
    name: "",
    lastName: "",
  });

  useEffect(() => {
    document.title = person.name + " " + person.lastName;
  });

  return (
    <>
      <div className="section">
        <Row label="Name">
          {/* passing children element */}
          <input
            className="input"
            value={person.name}
            onChange={(e) => dispatch({ type: "name", data: e.target.value })}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={person.lastName}
            onChange={(e) =>
              dispatch({ type: "lastName", data: e.target.value })
            }
          />
        </Row>
      </div>
      <h2>Hello, {person.name + " " + person.lastName}</h2>
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
