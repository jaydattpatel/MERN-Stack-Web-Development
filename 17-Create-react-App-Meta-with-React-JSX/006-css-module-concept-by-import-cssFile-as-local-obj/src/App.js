import "./App.css";
import myCSS from "./myCSS.module.css";

function App() {
  return (
    <div className="App">
      {/* writing no css for below but css got from parent */}
      <p>This has no css style but getting css from global parent css file</p>

      {/* using module css  */}
      <div className={myCSS.main}>
        This is outer div with module CSS.
        <p className={myCSS.text}>This is inner p with module CSS</p>
      </div>
    </div>
  );
}

export default App;
