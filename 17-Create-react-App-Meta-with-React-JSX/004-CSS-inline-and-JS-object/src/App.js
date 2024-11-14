import "./App.css";

function App() {
  const styleObj = {
    color: "red",
  };

  return (
    <div className="App">
      {/* writing no css for below but css got from parent */}
      <p>This has no css style but getting css from global parent css file</p>

      {/* writing inline css which override parents css  */}
      <p style={{ color: "blue", fontWeight: 300 }}>This is Inline CSS</p>

      {/* writing inline css with objects  */}
      <p style={styleObj}>This is inline style objects CSS</p>
    </div>
  );
}

export default App;
