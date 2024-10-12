/**
 * author : Jaydatt Patel
 * 
  createRef creates a ref object which can contain arbitrary value. Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

  syntax :
    const objRef = React.createRef()

    function Main(){
      return (<input ref={objRef} type="email">Email</input>);
    }
    console.log(objRef.current)
    console.log(objRef.current.property)

  Here objRef.current is node element which is referencing and you can access properties of node using objRef.current.property

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

// creating reference variable
const inputRef = React.createRef();

function submitHandler(event) {
  event.preventDefault();
  // accessing properties of reference object.
  console.log(inputRef);
  console.log(inputRef.current);
  console.log(inputRef.current.value);
}

function Form() {
  return (
    <form onSubmit={submitHandler}>
      <h2>Add Comment for Runs</h2>
      <input type="text" placeholder="Enter Run"></input>
      {/* assign reference Variable. */}
      <input ref={inputRef} type="text" placeholder="Enter Comment"></input>
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
