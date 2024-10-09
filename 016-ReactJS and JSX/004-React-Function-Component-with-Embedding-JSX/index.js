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

const header = <h1>React with JSX</h1>;

//creating function component with capital letter using =>
const MyButton = (obj) => <button>{obj.tx}</button>;

//creating function component with capital letter
function App(obj) {
  let year = 2024;
  return (
    <>
      {/* using JS in HTML */}
      <h2 className="heading">Welcome to ReactJS {year}.</h2>
      <h2 id="funComponent"> {obj.info}</h2>
      {/* calling React function component in nesting function component */}
      <MyButton tx="Test-BTN" />
    </>
  );
}

const Footer = (obj) => <h3>Footer</h3>;

// rendering React function component in Original DOM.
ReactDOM.createRoot(document.getElementById("main")).render(
  <>
    {/* using JS in HTML */}
    {header}
    <App info="Function Component" />
    <Footer />
  </>
);
