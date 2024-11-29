import GrandChildComponent from "./GrandChildComponent";
//Additional Task: Make use of context in the child component to provide the same color to the border
// importing useContext from react use props value of context
import { useContext } from "react";
// importing specific context to get its value
import { colorContext } from "../context";

const ChildComponent = () => {
  //Consuming the context using useContext hook
  const { color } = useContext(colorContext);
  return (
    <div
      style={{
        border: `10px solid`,
        // using color to style the border color
        borderColor: color,
        marginLeft: "50px",
        padding: "10px",
        fontSize: "30px",
        width: "300px",
      }}
    >
      <GrandChildComponent />
    </div>
  );
};

export default ChildComponent;
