// importing custom hook to consume the context
import { useValue } from "../customContext";

const GrandChildComponent = () => {
  //using custom hook to consume the context value
  const { color } = useValue();

  return <p style={{ color: color }}>Color code: {color}</p>;
};

export default GrandChildComponent;
