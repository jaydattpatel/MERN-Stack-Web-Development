import React from "react";
import ComponentA from "./Components/ComponentA.js";
import ComponentB from "./Components/ComponentB.js";
import ErrorBoundary from "./Components/ErrorBoundary.js";

class App extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
