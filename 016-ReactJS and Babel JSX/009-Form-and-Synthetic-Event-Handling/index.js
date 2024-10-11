/**
 * author : Jaydatt Patel
 * 
 Create Form and also use synthetic events like submit, load...

 */

let runs = 0;
let wicket = 0;

function Score() {
  return (
    <h3>
      Score : {runs}/{wicket}
    </h3>
  );
}

function addRuns(val) {
  if (wicket < 10) {
    runs += val;
    root.render(<App />);
  }
}

function addWicket() {
  if (wicket < 10) {
    wicket += 1;
    root.render(<App />);
  }
}
function Buttons() {
  return (
    <>
      <button onClick={() => addRuns(1)}>1</button>
      <button onClick={() => addRuns(2)}>2</button>
      <button onClick={() => addRuns(3)}>3</button>
      <button onClick={() => addRuns(4)}>4</button>
      <button onClick={() => addRuns(6)}>6</button>
      <button onClick={() => addWicket()}>Wicket</button>
    </>
  );
}

function submitHandler(event) {
  event.preventDefault();
}

function Form() {
  return (
    <form onSubmit={submitHandler}>
      <h2>Add Comment for Runs</h2>
      <input type="text" placeholder="Enter Run"></input>
      <input type="text" placeholder="Enter Comment"></input>
      <button>Submit</button>
    </form>
  );
}
//creating function component with capital letter
function App(obj) {
  return (
    <>
      <h1>Cricket Score Keeper</h1>
      <Score />
      <Buttons />
      <Form />
    </>
  );
}

// rendering React function component in Original DOM.
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<App />);
