import "./App.css";
import styled from "styled-components";

function App() {
  // defining div tag component with its css and sudo
  const Main = styled.div`
    background-color: blue;
    min-height: 100px;
    align-content: center;
    &:hover {
      background-color: yellow;
    }
  `;

  // defining p tag component with its css and sudo, also passing attributes as props to styled object
  const Text = styled.p`
    color: red;
    font-weight: bold;
    font-size: ${(props) => {
      return props.fSize;
    }};
    &:hover {
      background-color: cyan;
    }
  `;

  return (
    <div className="App">
      {/* writing no css for below but css got from parent */}
      <p>This has no css style but getting css from global parent css file</p>

      {/* writing component based css which override parents css  */}
      <Main>
        This is component based CSS outer div
        <Text fSize="50px">This is component based CSS inner p</Text>
      </Main>
    </div>
  );
}

export default App;
