import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // defining all render variables in this.state for auto render.
    this.state = {
      num: 0,
      welcome: <></>,
    };
  }

  Greeting() {
    const list = [];
    for (let i = 0; i < this.inputRef.current.value; i++) {
      list.push(<h3>{i + 1}. Welcome - Auto rendered</h3>);
    }
    return list;
  }

  async handler(event) {
    event.preventDefault();
    const greet = this.Greeting();
    // calling setState for update properties and auto render
    // here previousState is used last updated values of state object..and can be accessed by previousState.properties
    await this.setState({
      num: this.inputRef.current.value,
      welcome: greet,
    });
    console.log(this.state);
  }

  render() {
    // you can access props using this.props
    console.log("props :", this.props);
    return (
      <>
        <h1>Heading</h1>
        {/* bind current object with function using this due to error with this.setState and this.state */}
        <form onSubmit={this.handler.bind(this)}>
          <label>Enter Number :</label>
          <input ref={this.inputRef} type="number" /> <button>Set</button>
        </form>
        <h2>Value: {this.state.num}</h2>
        {this.state.welcome}
      </>
    );
  }
}

export default Test;
