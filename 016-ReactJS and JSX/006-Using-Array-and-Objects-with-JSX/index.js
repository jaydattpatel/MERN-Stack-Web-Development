/**
 * author : Jaydatt Patel
 * 
 React Components :
 Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

 Components are like JavaScript functions. They accept arbitrary inputs (called 'props') and return React elements describing what should appear on the screen.

 Types of Components:
 - function
 - class
 
 Note : React function and class name must start with capital letter. Otherwise Those are consider as normal Javascript. 

 Function component syntax: 
          function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }
 Class component syntax: 
        class Welcome extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
}
 
 */

//creating function component with capital letter
function App(obj) {
  let tableHeading = "Table Heading";
  let arr = [1, 2, 3, 4, 5];
  let content = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
  };
  return (
    <>
      {/* using JS in HTML */}
      <table className="heading">
        <thead>{tableHeading}</thead>
        <tbody>
          {arr.map((x) => (
            <tr>
              <th>{x}</th>
              <td>{content[x]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// rendering React function component in Original DOM.
ReactDOM.createRoot(document.getElementById("main")).render(
  <App info="Function Component" />
);
