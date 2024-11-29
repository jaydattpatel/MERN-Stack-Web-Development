// importing the useContext hooks
import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = () => {
  //Consuming the context using useContext hook
  const { color } = useContext(colorContext);

  return <p style={{ color: color }}>Color code: {color}</p>;
};

export default GrandChildComponent;
