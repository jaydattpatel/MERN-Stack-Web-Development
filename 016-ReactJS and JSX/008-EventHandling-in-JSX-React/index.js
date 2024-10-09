/**
 * author : Jaydatt Patel
 * 
React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

Notice how onClick={handlerFun} has no parentheses at the end of handler function! Do not call the event handler function. you only need to pass it down. React will call your event handler when the user clicks the button.
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
//creating function component with capital letter
function App(obj) {
  return (
    <>
      <h1>Cricket Score Keeper</h1>
      <Score />
      <Buttons />
    </>
  );
}

// rendering React function component in Original DOM.
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<App />);
