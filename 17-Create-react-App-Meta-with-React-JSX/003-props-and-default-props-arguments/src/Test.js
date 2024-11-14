import React from "react";
import Person from "./Person";

class Test extends React.Component {
  render() {
    return (
      <>
        <Person name="Rahul" />
        <Person name="Jay" />
        <Person />
      </>
    );
  }
}

export default Test;
