import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    const todos = this.state.todos;
    todos.push({ text });
    this.setState({
      todos,
    });
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    const todos = this.state.todos;
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="App">
        <span>Todo List</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd} />
        <List handleRemove={this.handleRemove} todos={this.state.todos} />
      </div>
    );
  }
}
