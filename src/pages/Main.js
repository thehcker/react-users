import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "Update My Diary", completed: false },
        { id: 2, title: "Study", completed: false },
        { id: 3, title: "Practice writing code", completed: false },
        { id: 4, title: "Listen to Worship", completed: false },
        { id: 5, title: "Read the daily devotion", completed: false },
        { id: 6, title: "Pray", completed: false }
      ]
    };
  }

  getStyle = todo => {
    return {
      listStyle: "none",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div className="main">
        <h2 className="main-head">Main Page</h2>
        {this.state.todos.map((todo, index) => {
          return (
            <div>
              <ul>
                <input
                  type="checkbox"
                  onChange={this.handleChange.bind(this, todo.id)}
                />
                <li key={todo.id} style={this.getStyle(todo)} className="todos">
                  {todo.title}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
