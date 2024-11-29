import { useState } from "react";
import ChildComponent from "./ChildComponent";
// importing context to value in sub tree
import { colorContext } from "../context";

const ParentComponent = () => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      {/* Providing the context to the child component and value attribute to pass data*/}
      <colorContext.Provider value={{ color, setColor }}>
        <ChildComponent />
      </colorContext.Provider>
    </>
  );
};

export default ParentComponent;
