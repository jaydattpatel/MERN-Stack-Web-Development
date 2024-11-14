import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {this.props.todos.map((todo) => {
          return <Todo handleRemove={this.props.handleRemove} todo={todo} />;
        })}
      </div>
    );
  }
}
