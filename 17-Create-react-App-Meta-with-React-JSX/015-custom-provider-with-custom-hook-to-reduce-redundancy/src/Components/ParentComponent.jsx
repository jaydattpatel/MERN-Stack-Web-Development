import ChildComponent from "./ChildComponent";
// importing customContext to use value in sub tree
import { CustomContext } from "../customContext";

const ParentComponent = () => {
  return (
    <>
      {/* using custom context provider to the child component */}
      <CustomContext>
        <ChildComponent />
      </CustomContext>
    </>
  );
};

export default ParentComponent;
