import GrandChildComponent from "./GrandChildComponent";
// import custom hook to consume the context
import { useValue } from "../customContext";

const ChildComponent = () => {
  //using custom hook to consume the context value
  const { color, setColor } = useValue();
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
    </>
  );
};

export default ChildComponent;
