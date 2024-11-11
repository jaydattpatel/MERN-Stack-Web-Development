import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleAdd(this.state.text);
        }}
      >
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
