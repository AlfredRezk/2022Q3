import React, { Component, useState } from "react";
import Todo from "./Todo";

const dummyTodos = [
  {
    id: "1",
    title: "Walk the dog",
  },
  {
    id: "2",
    title: "clean my room ",
  },
];

// export class Todos extends Component {

//     state = {todos:dummyTodos}

//     deleteTodo(id){
//         this.setState({todos: this.state.todos.filter(t=> t.id !== id)})
//     }

//   render() {
//     return (
//     <>
//       {this.state.todos.map(todo=><Todo key={todo.id} title={todo.title} id={todo.id} delete={this.deleteTodo.bind(this)}/> )}
//     </>

//     )
//   }
// }

// export default Todos

const Todos = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo=> todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onDelete={deleteTodo}
        />
      ))}
    </>
  );
};

export default Todos;
