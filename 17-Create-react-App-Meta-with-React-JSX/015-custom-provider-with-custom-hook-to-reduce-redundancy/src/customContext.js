// import createContext to create context
import { createContext, useState, useContext } from "react";

// create and export new context to pass in sub tree.
const colorContext = createContext();

// export custom hook that return value to use.
function useValue() {
  const value = useContext(colorContext);
  return value;
}

// defining custom context provider
function CustomContext({ children }) {
  const [color, setColor] = useState("#000000");
  return (
    <colorContext.Provider value={{ color, setColor }}>
      {children}
    </colorContext.Provider>
  );
}

export { CustomContext, useValue };
