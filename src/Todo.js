import { Component } from "react";

export class Todo extends Component {

  render() {
    // console.log(this.props);
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={()=>this.props.onRemove(this.props.todo.text)}>x</button>
      </div>
    );
  }
}
