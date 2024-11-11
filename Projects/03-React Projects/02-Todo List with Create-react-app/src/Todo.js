import { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button
          onClick={() => {
            this.props.handleRemove(this.props.todo);
          }}
        >
          x
        </button>
      </div>
    );
  }
}
