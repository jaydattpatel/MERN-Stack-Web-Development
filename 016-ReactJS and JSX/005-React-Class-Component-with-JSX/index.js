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

class App extends React.Component {
  header = (<h1>React with JSX</h1>);
  Footer = (obj) => <h3>Footer</h3>;

  //creating function component with capital letter using =>
  MyButton = (obj) => <button>{obj.tx}</button>;

  //creating function component with capital letter
  render() {
    // console.log(this.props);
    let year = 2024;
    return (
      <>
        {/* using JS in HTML */}
        {this.header}
        <h2 className="heading">Welcome to ReactJS {year}.</h2>
        {/* accessing arguments attributes using this.props */}
        <h2 id="funComponent"> {this.props.info}</h2>
        {/* calling React function component in nesting function component */}
        <this.MyButton tx="Test-BTN" />
        <this.Footer />
      </>
    );
  }
}
// rendering React function component in Original DOM.
ReactDOM.createRoot(document.getElementById("main")).render(
  <>
    <App info="Class Component" />
  </>
);
